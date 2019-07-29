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
function Challenger({ x, y, width, height } = {}) {
  MovingEntity.call(this, { x, y, width, height });

  /** @override **/
  this.imageSrc = {
    default: null,
    damaged: null,
    powered: null
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
    score: 1
  };

  // Render damaged image when dealt attack point damage, if vulnerable to
  // Attack point damage.
  this.damaged = {
    frame: 0,
    duration: fps / 4
  };

  // Render powered image as long as the entity is using power.
  this.powered = {
    frame: 0,
    duration: fps * 2
  };

  // Create a bullet at a fixed interval.
  this.bullet = {
    frame: 0,
    delay: fps
  };
}

Challenger.prototype = Object.create(MovingEntity.prototype);

/** @override **/
Challenger.prototype.loadImage = function() {
  if (this.status.damaged) {
    this.image.src = this.imageSrc.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  } else {
    this.image.src = this.imageSrc.default;
  }
};

// Use power action.
// To be implemented by the extending class.
Challenger.prototype.power = function() {
  return {
    enable: () => {
      // ...implementation
    },
    disable: () => {
      // ...implementation
    }
  };
};

// Collision validation.
Challenger.prototype.assertCollision = function(entities, idx) {
  // Collision flag.
  let hasCollided = false;

  // Cycle through entity collection.
  entities.forEach((entity, _idx) => {
    // Assert if collision conditions.
    if (
      this.type !== Entity.types.EFFECT &&
      entity.type !== Entity.types.EFFECT &&
      entity.faction !== this.faction &&
      idx !== _idx
    ) {
      // Assert if collision occurred.
      if (
        this.x < entity.x + entity.width &&
        this.x + this.width > entity.x &&
        this.y < entity.y + entity.height &&
        this.y + this.height > entity.y
      ) {
        // Deal damage on this entity instance.
        // To log.
        if (entity.status.alive) {
          entity.points.health = entity.points.health - this.points.attack;
          log.exchange(this, entity);
        }

        // Deal damage on entity instance.
        // To log.
        if (this.status.alive && !this.status.invincible) {
          this.points.health = this.points.health - entity.points.attack;
          log.exchange(entity, this);
        }

        // Assert health points on this entity instance
        if (
          this.points.health <= 0 ||
          this.type === (Entity.types.BULLET || Entity.types.BOMB)
        ) {
          this.status.alive = false;
        }

        // Assert health points on entity instance.
        if (entity.points.health <= 0) {
          entity.status.alive = false;
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
Challenger.prototype.createBullets = function(entities) {};

// Create any number and types of bombs.
// To be implemented by the extending class.
Challenger.prototype.createBombs = function(entities) {};

// Create any number and types of explosions.
Challenger.prototype.createExplosions = function() {
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
Challenger.prototype.update = function(entities, idx) {
  // Assert alive status.
  if (this.status.alive) {
    // Move in vector.
    this.move();

    // Assert an entity collision.
    // Start the damaged image duration timer.
    // Create a destroy explosion.
    if (this.assertCollision(entities, idx)) {
      this.status.damaged = true;
      this.createExplosions().destroy(entities);
    }

    // Do damaged logic for a duration.
    if (this.status.damaged && this.damaged.frame < this.damaged.duration) {
      // Make entity invincible.
      // Set the image to damaged.
      // Increment timer.
      this.status.invincible = true;
      this.loadImage();
      this.damaged.frame = this.damaged.frame + 1;
    } else {
      // Make entity undamaged.
      // Set invincible status to false.
      // Set the image back to default.
      // Reset timer.
      this.status.damaged = false;
      this.status.invincible = false;
      this.loadImage();
      this.damaged.frame = 0;
    }

    // Activate entity power for a duration.
    if (this.status.powered && this.powered.frame < this.powered.duration) {
      // Perform power.
      // Increment timer.
      this.power().enable();
      this.powered.frame = this.powered.frame + 1;
    } else {
      // Perform unpower.
      // Reset timer.
      this.power().disable();
      this.powered.frame = 0;
    }

    // Create bullets at an interval.
    if (this.bullet.frame < this.bullet.delay) {
      // Increment timer.
      this.bullet.frame = this.bullet.frame + 1;
    } else {
      // Create bullets.
      // Reset timer.
      this.createBullets(entities);
      this.bullet.frame = 0;
    }
  } else {
    // To log.
    // Create a destroy explosion if dead after collision.
    // Remove from the entities list.
    log.death(this);
    this.createExplosions().destroy(entities);
    this.remove(entities, idx);
  }
};

// Render action.
Challenger.prototype.render = function() {
  canvas.drawImage({
    image: this.image,
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  });
};

module.exports = Challenger;
