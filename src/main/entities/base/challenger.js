const canvas = require('../../canvas');
const { fps } = require('../../options');
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

  // The statuses an entity can take.
  // Extending entities may implement more statuses.
  this.status = {
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
    duration: fps / 2
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

// Exchange/trade health points and attack points on collision.
Challenger.prototype.collision = function(entity) {
  // Skip if this entity instance is dead or invincible.
  if (this.status.alive && !this.status.invincible) {
    // Take damage on this entity instance.
    this.points.health = this.points.health - entity.points.attack;

    // Die if hit points <= 0 on this entity instance.
    if (this.points.health <= 0) {
      this.status.alive = false;
    }

    if (
      entity.type === Entity.types.BULLET ||
      entity.type === Entity.types.BOMB
    ) {
      entity.status.alive = false;
    }

    console.log(
      `%c${this.faction} ${this.type}%c attacked %c${entity.faction} ` +
        `${entity.type}%c for : %c${this.points.attack} health`,
      'color:#cb4b16;',
      'color:inherit',
      'color:#2aa198',
      'color:inherit',
      'color:#b58900;'
    );
    console.log(
      `%c${this.faction} ${this.type}%c has %c${this.points.health} ` +
        `health%c left`,
      'color:#cb4b16;',
      'color:inherit',
      'color:#cb4b16',
      'color:inherit'
    );
    console.log(
      `%c${entity.faction} ${entity.type}%c has %c${entity.points.health} ` +
        `health%c left`,
      'color:#2aa198;',
      'color:inherit',
      'color:#2aa198',
      'color:inherit'
    );
    console.log('-------------------------------------');
  }
};

// Collision validation.
Challenger.prototype.assertCollision = function(entities, idx) {
  // Collision flag.
  let hasCollided = false;
  // Cycle through entity collection.
  entities.forEach((entity, _idx) => {
    // Validate if collision assert should occur.
    if (
      idx !== _idx &&
      this.status.alive &&
      !this.status.invincible &&
      this.faction !== entity.faction &&
      this.type !== Entity.types.EFFECT
    ) {
      // Assert if collision occurred.
      if (
        this.x < entity.x + entity.width &&
        this.x + this.width > entity.x &&
        this.y < entity.y + entity.height &&
        this.y + this.height > entity.y
      ) {
        // Take action on collision event.
        this.collision(entity);

        // Set collision flag to true.
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
    if (this.assertCollision(entities, idx)) {
      // Start the damaged image duration timer.
      this.status.damaged = true;

      // Create a damaged explosion if alive after collision.
      if (this.status.alive) {
        this.createExplosions().damage(entities);
      }
    }

    // Do damaged logic for a duration.
    if (this.status.damaged && this.damaged.frame < this.damaged.duration) {
      // Make entity invincible.
      this.status.invincible = true;

      // Set the image to damaged.
      this.loadImage();

      // Increment timer.
      this.damaged.frame = this.damaged.frame + 1;
    } else {
      // Make entity undamaged.
      this.status.damaged = false;

      // Set invincible status to false.
      this.status.invincible = false;

      // Set the image back to default.
      this.loadImage();

      // Reset timer.
      this.damaged.frame = 0;
    }

    // Activate entity power for a duration.
    if (this.status.powered && this.powered.frame < this.powered.duration) {
      // Perform power.
      this.power().enable();

      // Increment timer.
      this.powered.frame = this.powered.frame + 1;
    } else {
      // Perform unpower.
      this.power().disable();

      // Reset timer.
      this.powered.frame = 0;
    }

    // Create bullets at an interval.
    if (this.bullet.frame < this.bullet.delay) {
      // Increment timer.
      this.bullet.frame = this.bullet.frame + 1;
    } else {
      // Create bullets.
      this.createBullets(entities);

      // Reset timer.
      this.bullet.frame = 0;
    }
  } else {
    // To log.
    console.log(
      `%c${this.faction} ${this.type} has been killed`,
      'color:#859900;'
    );
    console.log('-------------------------------------');

    // Create a destroy explosion if dead after collision.
    this.createExplosions().destroy(entities);

    // Remove from the entities list.
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
