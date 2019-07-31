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
function AggressiveEntity({ x, y, width, height, entities } = {}) {
  MovingEntity.call(this, { x, y, width, height, entities });

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
    attack: 0,
    value: 0,
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

// Assert if collision occurred
AggressiveEntity.prototype.assertEntityCollision = function(entity) {
  return (
    this.x < entity.x + entity.width &&
    this.x + this.width > entity.x &&
    this.y < entity.y + entity.height &&
    this.y + this.height > entity.y
  );
};

// Validate if collision should occur.
AggressiveEntity.prototype.validateEntityCollision = function(
  entity,
  idx,
  _idx
) {
  return (
    idx !== _idx &&
    entity.type !== Entity.types.EFFECT &&
    this.faction !== entity.faction &&
    this.type !== Entity.types.EFFECT
  );
};

// Entity collision action.
AggressiveEntity.prototype.collide = function(entities, idx, entity) {
  if (!this.status.invincible) {
    // Exchange attack damage points.
    this.points.health = this.points.health - entity.points.attack;

    // Assert alive status.
    // Add to the entity score.
    if (this.points.health <= 0) {
      this.status.alive = false;
      entity.points.score = entity.points.score + this.points.value;
    }
  }
  if (!entity.status.invincible) {
    // Exchange attack damage points.
    entity.points.health = entity.points.health - this.points.attack;

    // Assert alive status.
    if (entity.points.health <= 0) {
      entity.status.alive = false;

      // Add to the entity score.
      this.points.score = this.points.score + entity.points.value;
    }
  }
};

// Assert entity collision.
AggressiveEntity.prototype.assertEntitiesCollision = function(entities, idx) {
  // Collision flag.
  let hasCollided = false;

  // Cycle through entity collection.
  entities.forEach((entity, _idx) => {
    // Assert validate and collision
    // Set collided flag.
    if (
      this.validateEntityCollision(entity, idx, _idx) &&
      this.assertEntityCollision(entity)
    ) {
      this.collide(entities, idx, entity);
      hasCollided = true;
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
AggressiveEntity.prototype.preUpdate = function(entities, idx) {
  // Assert an entity collision.
  if (this.assertEntitiesCollision(entities, idx)) {
    if (!this.status.damaged || !this.status.invincible) {
      // Start the damaged image duration timer.
      this.status.damaged = true;

      // Create a destroy explosion.
      this.createExplosions().destroy(entities);
    }
  }
};

/** @override **/
AggressiveEntity.prototype.update = function(entities, idx) {
  // Do the pre-update action.
  this.preUpdate(entities, idx);

  // Assert alive status.
  if (this.status.alive) {
    // Move in vector.
    this.move();

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
    if (this.status.powered && this.type === Entity.types.PLAYER) {
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
    if (this.status.shielded && this.type === Entity.types.PLAYER) {
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
    // Remove from the entities list.
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
