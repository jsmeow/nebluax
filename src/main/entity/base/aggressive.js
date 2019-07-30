const canvas = require('../../canvas');
const { fps } = require('../../options');
const log = require('../../log');
const Entity = require('../entity');
const MovingEntity = require('./moving');
const ExplosionDamage = require('../explosion/damage/explosion-damage');
const ExplosionDestroy = require('../explosion/destroy/explosion-destroy');

// An entity with health points that can deal/receive attack point damage.
// This entity has a physical presence in the game.
// This entity can deal or suffer from status effects.
function AggressiveEntity({ x, y, width, height } = {}) {
  MovingEntity.call(this, { x, y, width, height });

  /** @override **/
  this.imageSrc = {
    default: null,
    damaged: null,
    powered: null,
    shielded: null
  };

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    firing: false,
    invincible: false,
    damaged: false,
    powered: false,
    idle: false
  };

  // Points types
  // Extending classes may add their own points types in addition to this one.
  this.points = {
    health: 1,
    attack: 1,
    score: 0
  };

  // Timers for actions/events.
  // Render damaged image when dealt attack point damage, if vulnerable to
  // Attack point damage.
  // Render powered image as long as the entity is using power.
  // Render shielded image as long as the entity is using shield.
  this.timer = {
    damaged: {
      frame: 0,
      duration: fps / 4
    },
    powered: {
      frame: 0,
      duration: fps * 2
    },
    shielded: {
      frame: 0,
      duration: fps * 2
    },
    bullet: {
      frame: 0,
      delay: fps
    }
  };
}

AggressiveEntity.prototype = Object.create(MovingEntity.prototype);

/** @override **/
AggressiveEntity.prototype.loadImage = function() {
  if (this.status.damaged) {
    this.image.src = this.imageSrc.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  } else if (this.status.shielded) {
    this.image.src = this.imageSrc.shielded;
  } else {
    this.image.src = this.imageSrc.default;
  }
};

// Use power action.
// To be implemented by the extending class.
AggressiveEntity.prototype.power = function() {
  return {
    enable: () => {
      // ...implementation
    },
    disable: () => {
      // ...implementation
    }
  };
};

// Use shield action.
AggressiveEntity.prototype.shield = function() {
  return {
    enable: () => {
      // Check if not shielded already.
      if (!this.status.shielded) {
        // Make entity shielded.
        this.status.shielded = true;
        // Set invincible status to true.
        this.status.invincible = true;
        // Set the image to shielded.
        this.loadImage();
      }
    },
    disable: () => {
      // Make entity shielded.
      this.status.shielded = false;
      // Set invincible status to false.
      this.status.invincible = false;
      // Set the image to default.
      this.loadImage();
    }
  };
};

// Assert entity collision.
AggressiveEntity.prototype.assertEntityCollision = function(entities, idx) {
  // Collision flag.
  let hasCollided = false;

  // Cycle through entity collection.
  entities.forEach((entity, _idx) => {
    // Assert boundary collision for projectile entity type.
    // Schedule projectile to be disposed.
    if (
      this.type === Entity.types.PROJECTILE &&
      (this.assertBoundaryCollision().left ||
        this.assertBoundaryCollision().right ||
        this.assertBoundaryCollision().top ||
        this.assertBoundaryCollision().bottom)
    ) {
      this.status.alive = false;
    }

    // Validate collision conditions.
    if (
      idx !== _idx &&
      this.type !== Entity.types.EFFECT &&
      entity.type !== Entity.types.EFFECT &&
      entity.faction !== this.faction &&
      !(
        this.type === Entity.types.PROJECTILE &&
        entity.type === Entity.types.PROJECTILE
      )
    ) {
      // Assert if collision occurred.
      if (
        this.x < entity.x + entity.width &&
        this.x + this.width > entity.x &&
        this.y < entity.y + entity.height &&
        this.y + this.height > entity.y
      ) {
        // Deal damage on entity instance.
        if (
          this.status.alive &&
          entity.status.alive &&
          !entity.status.invincible
        ) {
          // This entity instance deals damage to entity instance.
          // To log.
          entity.points.health = entity.points.health - this.points.attack;
          log.exchange(this, entity);

          // Assert entity type.
          // Projectiles are set for disposal on collision.
          // Assert alive status.
          if (entity.type === Entity.types.PROJECTILE) {
            entity.status.alive = false;
          } else if (entity.points.health <= 0) {
            entity.status.alive = false;

            // Add to the entity score.
            // Add to the creator entity score if entity is a projectile type.
            if (this.type === Entity.types.PROJECTILE) {
              this.creator.points.score =
                this.creator.points.score + entity.points.score;
            } else {
              this.points.score = this.points.score + entity.points.score;
            }
          }
        }

        // Deal damage on entity instance.
        if (
          entity.status.alive &&
          this.status.alive &&
          !this.status.invincible
        ) {
          // Entity instance deals damage to this entity instance.
          // To log.
          this.points.health = this.points.health - entity.points.attack;
          log.exchange(entity, this);

          // Assert entity type.
          // Projectiles are set for disposal on collision.
          // Assert alive status.
          // Projectiles are set for disposal on collision.
          if (this.type === Entity.types.PROJECTILE) {
            this.status.alive = false;
          } else if (this.points.health <= 0) {
            this.status.alive = false;

            // Add to the entity score.
            entity.points.score = entity.points.score + this.points.score;

            // Add to the creator entity score if entity is a projectile type.
            if (entity.type === Entity.types.PROJECTILE) {
              entity.creator.points.score =
                entity.creator.points.score + this.points.score;
            }
          }
        }

        // Set collided flag.
        hasCollided = true;
      }
    }
  });

  return hasCollided;
};

// Create any number and types of bullets.
// To be implemented by the extending class.
AggressiveEntity.prototype.createBullets = function(entities) {};

// Create any number and types of bombs.
// To be implemented by the extending class.
AggressiveEntity.prototype.createBombs = function(entities) {};

// Create any number and types of explosions.
AggressiveEntity.prototype.createExplosions = function() {
  return {
    damage: entities => {
      entities.push(
        new ExplosionDamage({
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height
        })
      );
    },
    destroy: entities => {
      entities.push(
        new ExplosionDestroy({
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height
        })
      );
    }
  };
};

/** @override **/
AggressiveEntity.prototype.update = function(entities, idx) {
  // Assert alive status.
  if (this.status.alive) {
    // Move in vector.
    this.move();

    // Assert an entity collision.
    // Start the damaged image duration timer.
    // Create a destroy explosion.
    if (this.assertEntityCollision(entities, idx)) {
      if (this.type !== Entity.types.PROJECTILE) {
        this.status.damaged = true;
        this.createExplosions().destroy(entities);
      }
    }

    // Do damaged logic for a duration.
    if (this.status.damaged) {
      if (this.timer.damaged.frame < this.timer.damaged.duration) {
        // Make entity invincible.
        // Set the image to damaged.
        // Increment timer.
        this.status.invincible = true;
        this.loadImage();
        this.timer.damaged.frame = this.timer.damaged.frame + 1;
      } else {
        // Make entity undamaged.
        // Set invincible status to false.
        // Set the image back to default.
        // Reset timer.
        this.status.damaged = false;
        this.status.invincible = false;
        this.loadImage();
        this.timer.damaged.frame = 0;
      }
    }

    // Activate entity power for a duration.
    if (this.status.powered) {
      if (this.timer.powered.frame < this.timer.powered.duration) {
        // Perform power.
        // Increment timer.
        this.power().enable();
        this.timer.powered.frame = this.timer.powered.frame + 1;
      } else {
        // Perform unpower.
        // Reset timer.
        this.power().disable();
        this.timer.powered.frame = 0;
      }
    }

    // Activate entity power for a duration.
    if (this.status.shielded) {
      if (this.timer.shielded.frame < this.timer.shielded.duration) {
        // Perform shield.
        // Increment timer.
        this.shield().enable();
        this.timer.shielded.frame = this.timer.shielded.frame + 1;
      } else {
        // Perform unshield.
        // Reset timer.
        this.shield().disable();
        this.timer.shielded.frame = 0;
      }
    }

    // Create bullets at an interval.
    if (this.timer.bullet.frame < this.timer.bullet.delay) {
      // Increment timer.
      this.timer.bullet.frame = this.timer.bullet.frame + 1;
    } else {
      // Create bullets.
      // Reset timer.
      this.createBullets(entities);
      this.timer.bullet.frame = 0;
    }
  } else {
    // To log.
    // Create a destroy explosion if dead after collision.
    // Remove from the entities list.
    if (this.type !== Entity.types.PROJECTILE) {
      log.death(this);
      this.createExplosions().destroy(entities);
    }
    this.remove(entities, idx);
  }
};

// Render action.
AggressiveEntity.prototype.render = function() {
  canvas.drawImage({
    image: this.image,
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  });
};

module.exports = AggressiveEntity;
