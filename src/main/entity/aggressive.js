const canvas = require('../canvas');
const { fps } = require('../options');
const Entity = require('./entity');
const MovingEntity = require('./moving');
const ExplosionDamage = require('./explosion/damage/explosion-damage');
const ExplosionDestroy = require('./explosion/destroy/explosion-destroy');

// An entity with health points that can deal/receive attack point damage.
// This entity has a physical presence in the game.
// This entity can deal or suffer from status effects.
function AggressiveEntity({ x, y, width, height, entities, dx, dy }) {
  MovingEntity.call(this, { x, y, width, height, entities, dx, dy });

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
    shielded: false,
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

AggressiveEntity.prototype.loadImage = function() {
  this.image.src = this.imageSrc.default;
};

// Activate entity damaged timer for a duration.
AggressiveEntity.prototype.damaged = function() {
  return {
    enable: () => {
      // Make entity damaged.
      this.status.damaged = true;
      // Set invincible status to true.
      this.status.invincible = true;
    },
    disable: () => {
      // Make entity undamaged.
      this.status.damaged = false;
      // Set invincible status to false.
      this.status.invincible = false;
    }
  };
};

// Tick entity damaged timer for a duration.
AggressiveEntity.prototype.tickDamagedTimer = function() {
  if (!this.status.damaged && this.timer.damaged.frame === 0) {
    // Perform damaged.
    this.damaged().enable();
  }
  if (this.timer.damaged.frame < this.timer.damaged.duration) {
    // Increment timer.
    this.timer.damaged.frame = this.timer.damaged.frame + 1;
  }
  if (this.timer.damaged.frame >= this.timer.damaged.duration) {
    // Perform undamaged.
    // Reset timer.
    this.damaged().disable();
    this.timer.damaged.frame = 0;
  }
};

// Activate entity damaged timer for a duration.
AggressiveEntity.prototype.startDamagedTimer = function() {
  if (!this.status.damaged) {
    this.tickDamagedTimer();
  }
};

// Use power action.
// Can be overridden by the extending class.
AggressiveEntity.prototype.powered = function() {
  return {
    enable: () => {
      // Check if not powered already.
      if (!this.status.powered) {
        // Make entity powered.
        this.status.powered = true;
      }
    },
    disable: () => {
      // Make entity unpowered.
      this.status.powered = false;
      // Set the image to default.
      this.loadImage();
    }
  };
};

// Tick entity powered timer for a duration.
AggressiveEntity.prototype.tickPoweredTimer = function() {
  if (!this.status.powered && this.timer.powered.frame === 0) {
    // Perform power.
    this.powered().enable();
  } else if (this.timer.powered.frame < this.timer.powered.duration) {
    // Increment timer.
    this.timer.powered.frame = this.timer.powered.frame + 1;
  } else if (this.timer.powered.frame >= this.timer.powered.duration) {
    // Perform unpower.
    // Reset timer.
    this.powered().disable();
    this.timer.powered.frame = 0;
  }
};

// Activate entity powered timer for a duration.
AggressiveEntity.prototype.startPoweredTimer = function() {
  if (!this.status.powered) {
    this.tickPoweredTimer();
  }
};

// Use shield action.
// Can be overridden by the extending class.
AggressiveEntity.prototype.shielded = function() {
  return {
    enable: () => {
      // Check if not shielded already.
      if (!this.status.shielded) {
        // Make entity shielded.
        this.status.shielded = true;
        // Set invincible status to true.
        this.status.invincible = true;
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

// Tick entity shielded timer for a duration.
AggressiveEntity.prototype.tickShieldedTimer = function() {
  if (!this.status.shielded && this.timer.shielded.frame === 0) {
    // Perform shield.
    this.shielded().enable();
  } else if (this.timer.shielded.frame < this.timer.shielded.duration) {
    // Increment timer.
    this.timer.shielded.frame = this.timer.shielded.frame + 1;
  } else if (this.timer.shielded.frame >= this.timer.shielded.duration) {
    // Perform unshield.
    // Reset timer.
    this.shielded().disable();
    this.timer.shielded.frame = 0;
  }
};

// Activate entity shielded timer for a duration.
AggressiveEntity.prototype.startShieldedTimer = function() {
  if (!this.status.shielded) {
    this.tickShieldedTimer();
  }
};

// Create any number and types of bullets.
// To be implemented by the extending class.
AggressiveEntity.prototype.createBullets = function() {};

// Create bullets at an interval.
AggressiveEntity.prototype.tickBulletTimer = function() {
  if (this.timer.bullet.frame < this.timer.bullet.delay) {
    // Increment timer.
    this.timer.bullet.frame = this.timer.bullet.frame + 1;
  } else {
    // Create bullets.
    // Reset timer.
    this.createBullets();
    this.timer.bullet.frame = 0;
  }
};

// Create any number and types of bombs.
// To be implemented by the extending class.
AggressiveEntity.prototype.createBombs = function() {};

// Create any number and types of explosions.
AggressiveEntity.prototype.createExplosions = function(
  { x, y, width, height, entities = this.entities, creator = this } = {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height,
    entities: this.entities,
    creator: this
  }
) {
  return {
    damage: () => {
      this.entities.push(
        new ExplosionDamage({
          x,
          y,
          width,
          height,
          entities,
          creator
        })
      );
    },
    destroy: () => {
      this.entities.push(
        new ExplosionDestroy({
          x,
          y,
          width,
          height,
          entities,
          creator
        })
      );
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
    // Entity cannot reference itself.
    idx !== _idx &&
    // Both entities cannot be the same faction.
    entity.faction !== this.faction &&
    // Both entities cannot be effect types.
    entity.type !== Entity.types.EFFECT &&
    this.type !== Entity.types.EFFECT &&
    // Entities cannot be bullets type.
    !(
      this.subtype === Entity.subtypes.BULLET &&
      entity.subtype === Entity.subtypes.BULLET
    )
  );
};

// Entity collision action.
AggressiveEntity.prototype.collide = function(idx, entity) {
  if (this.status.alive && entity.status.alive) {
    // Exchange attack damage points.
    if (!this.status.invincible) {
      this.points.health = this.points.health - entity.points.attack;
    } else if (this.subtype === Entity.subtypes.BULLET) {
      this.status.invincible = false;
      this.status.alive = false;
    }
    if (!entity.status.invincible) {
      entity.points.health = entity.points.health - this.points.attack;
    } else if (entity.subtype === Entity.subtypes.BULLET) {
      entity.status.invincible = false;
      entity.status.alive = false;
    }

    // Assert alive status.
    if (this.points.health <= 0) {
      this.status.alive = false;
    }
    if (entity.points.health <= 0) {
      entity.status.alive = false;
    }
  }
};

// Entity post collision action.
AggressiveEntity.prototype.postCollide = function(idx, hasCollided) {
  if (hasCollided) {
    this.startDamagedTimer();
    this.createExplosions().destroy();
  }
};

// Assert entity collision.
AggressiveEntity.prototype.assertEntitiesCollision = function(idx) {
  // Collision flag.
  let hasCollided = false;

  // Cycle through entity collection.
  this.entities.forEach((entity, _idx) => {
    // Validate collision.
    // Assert collision.
    if (
      this.validateEntityCollision(entity, idx, _idx) &&
      this.assertEntityCollision(entity)
    ) {
      // Set collided flag.
      hasCollided = true;

      // Do collision action.
      this.collide(idx, entity);
    }
  });

  // Wrap up entity collision assertion.
  this.postCollide(idx, hasCollided);
};

/** @override **/
AggressiveEntity.prototype.preUpdate = function(idx) {
  // Assert an entity collision.
  this.assertEntitiesCollision(idx);
};

/** @override **/
AggressiveEntity.prototype.tick = function() {
  // Tick the entity damaged timer.
  if (this.status.damaged) {
    this.tickDamagedTimer();
  }

  // Tick the entity powered timer.
  if (this.status.powered) {
    this.tickPoweredTimer();
  }

  // Tick the entity shielded timer.
  if (this.status.shielded) {
    this.tickShieldedTimer();
  }

  // Tick the create bullet timer.
  this.tickBulletTimer();
};

/** @override **/
AggressiveEntity.prototype.dispose = function(idx) {
  // Create a destroy explosion.
  this.createExplosions().destroy();

  // Remove from the entities list.
  this.remove(idx);
};

/** @override **/
AggressiveEntity.prototype.update = function(idx) {
  // Do the pre-update action.
  this.preUpdate(idx);

  // Assert alive status.
  if (this.status.alive) {
    // Do ticking timer action.
    this.tick();

    // Move in vector.
    this.move();
  } else {
    // Dispose entity action.
    this.dispose(idx);
  }
};

/** @override **/
AggressiveEntity.prototype.render = function() {
  this.loadImage();

  if (this.status.damaged) {
    console.log(this.timer.damaged.frame);
    this.image.src = this.imageSrc.damaged;
  }
  if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  }
  if (this.status.shielded) {
    this.image.src = this.imageSrc.shielded;
  }

  // Render depending on the entity state.
  canvas.drawImage({
    image: this.image,
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  });
};

module.exports = AggressiveEntity;
