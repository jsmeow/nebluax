const canvas = require('../canvas');
const { fps } = require('../options');
const types = require('./entity-types');

function Entity(
  {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    entities = [],
    faction = types.faction.NONE,
    dx = 0,
    dy = 0,
    factory
  } = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    entities: [],
    faction: types.faction.NONE,
    dx: 0,
    dy: 0,
    factory: null
  }
) {
  // Position
  this.x = x;
  this.y = y;

  // Size
  this.width = width;
  this.height = height;

  // The entities list.
  this.entities = entities;

  // The application user/ / player.
  this.player = this.entities[0];

  // Image and image sources used by this entity.
  // To be provided by the extending class.
  this.image = new Image();
  this.imageSrc = {
    default: null,
    enemy: null,
    allied: null,
    damaged: null,
    powered: null,
    shielded: null
  };

  // Affiliated entity faction.
  this.faction = faction;

  // The statuses an entity can take.
  // Extending entities may implement more statuses.
  this.status = {
    alive: true,
    firing: true,
    invincible: false,
    damaged: false,
    powered: false,
    shielded: false,
    moving: false,
    pathing: false,
    roaming: false,
    prowling: false,
    patrolling: false,
    disposing: false
  };

  // Points types
  // Extending classes may add their own points types in addition to this one.
  this.points = {
    health: 1,
    attack: 0,
    value: 0,
    score: 0
  };

  // Vector movement unit magnitude.
  this.speed = 1;

  // The vector movement magnitude in the x, y direction.
  this.dx = dx || 0;
  this.dy = dy || 0;

  // Timers for actions/events.
  // Render damaged image when dealt attack point damage, if vulnerable to
  // Attack point damage.
  // Render powered image as long as the entity is using power.
  // Render shielded image as long as the entity is using shield.
  this.timer = {
    damaged: {
      frame: 0,
      duration: fps * 0.5
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

  // Type and subtype of entity.
  // Optional, allows for additional validation.
  this.type = '';
  this.subtype = '';

  // The entity factory util property.
  // Optional, allows entity to create more entities.
  this.factory = factory;
}

// Initializer.
Entity.prototype.init = function() {
  this.loadImage();
};

// Load an image source into the image object.
Entity.prototype.loadImage = function() {
  this.image.src = this.imageSrc.default;

  if (this.faction === types.faction.ENEMY) {
    this.image.src = this.imageSrc.enemy;
  } else if (this.faction === types.faction.ALLIED) {
    this.image.src = this.imageSrc.allied;
  }

  if (this.status.damaged) {
    this.image.src = this.imageSrc.damaged;
  } else if (this.status.powered) {
    this.image.src = this.imageSrc.powered;
  } else if (this.status.shielded) {
    this.image.src = this.imageSrc.shielded;
  }
};

// Util method.
Entity.prototype.util = function() {
  return {
    orientation: () => {
      return Math.random() < 0.5 ? -1 : 1;
    },
    range: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
};

// Assert collision.
Entity.prototype.assertCollision = function() {
  return {
    entity: entity => {
      return (
        this.x < entity.x + entity.width &&
        this.x + this.width > entity.x &&
        this.y < entity.y + entity.height &&
        this.y + this.height > entity.y
      );
    },
    boundary: {
      left: this.x - this.dx <= 0,
      right: this.x + this.dx >= canvas.width + this.width,
      top: this.y - this.dy <= 0,
      bottom: this.y + this.dy >= canvas.height - this.height,
      all:
        this.x - this.dx <= 0 ||
        this.x + this.dx >= canvas.width + this.width ||
        this.y - this.dy <= 0 ||
        this.y + this.dy >= canvas.height - this.height
    },
    point: {
      left: x => {
        return this.x <= x;
      },
      right: x => {
        return this.x >= x;
      },
      up: y => {
        return this.y <= y;
      },
      down: y => {
        return this.y >= y;
      }
    }
  };
};

// Move in a vector.
Entity.prototype.move = function(
  { idx, dx = this.dx, dy = this.dy } = { idx: null, dx: this.dx, dy: this.dy }
) {
  // Perform movement in the x and y plane.
  this.x = this.x + this.speed * dx;
  this.y = this.y + this.speed * dy;

  // Poll and assert entity collision if applicable.
  this.assertEntitiesCollision(idx);
};

// Move in a vector line towards a point.
// Accepts a vector movement magnitude as a parameter.
Entity.prototype.point = function({ x = this.x, y = this.y, d = 1 }) {
  // Set movement flag.
  this.status.moving = true;

  // Set vector movement magnitude in x, y.
  if (!this.assertCollision().point.left(x)) {
    this.dx = -d;
  }
  if (!this.assertCollision().point.right(x)) {
    this.dx = d;
  }
  if (!this.assertCollision().point.up(y)) {
    this.dy = -d;
  }
  if (!this.assertCollision().point.down(y)) {
    this.dy = d;
  }

  // Begin moving towards point.
  return new Promise(resolve => {
    // The point collision detection polling timer.
    const polling = setInterval(() => {
      // Evaluate movement vector directions.
      if (this.dx < 0 && this.assertCollision().point.left(x)) {
        this.dx = 0;
      }
      if (this.dx > 0 && this.assertCollision().point.right(x)) {
        this.dx = 0;
      }
      if (this.dy < 0 && this.assertCollision().point.up(y)) {
        this.dy = 0;
      }
      if (this.dy > 0 && this.assertCollision().point.down(y)) {
        this.dy = 0;
      }

      // Assert if point has been reached.
      if ((this.dx === 0 && this.dy === 0) || !this.status.alive) {
        // Clear polling if:
        // Entity has reached the point.
        // Entity has died.
        // Set movement flag.
        // Clear the polling timer.
        this.status.moving = false;
        clearInterval(polling);
        resolve();
      }
    }, 1 / (fps * fps));
  });
};

// Move in a vector point path.
Entity.prototype.path = function(path) {
  // Set pathing flag.
  this.status.pathing = true;

  return path
    .reduce((promise, point) => {
      return promise.then(() => {
        return this.point(point);
      });
    }, Promise.resolve())
    .then(() => {
      // Set pathing flag.
      this.status.pathing = false;
      return Promise.resolve();
    });
};

// Default roaming action.
// Roams in place from left to right.
// Can be overridden by the extending entity for a different roam action.
Entity.prototype.roam = function() {
  // Set roaming flag.
  this.status.roaming = true;

  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  // Begin roaming.
  return this.point({
    x: x - 100,
    y,
    d: 0.5
  })
    .then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, fps * 10);
      });
    })
    .then(() => {
      return this.point({
        x: x + 100,
        y,
        d: 0.5
      });
    })
    .then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, fps * 10);
      });
    })
    .then(() => {
      return this.point({
        x,
        y,
        d: 0.5
      });
    })
    .then(() => {
      // Set roaming flag.
      this.status.roaming = false;
      return Promise.resolve();
    });
};

// Prowling movement/action.
// To be implemented by the extending class.
Entity.prototype.prowl = function() {
  // Set prowling flag.
  this.status.prowling = true;

  // ...implementation

  // Set prowling flag.
  this.status.prowling = false;
  return Promise.resolve();
};

// Patrolling movement/action.
// Loops between roaming and prowling.
Entity.prototype.patrol = function() {
  // Set patrolling flag.
  this.status.patrolling = true;

  return this.roam()
    .then(() => {
      return this.prowl();
    })
    .then(() => {
      if (this.status.patrolling) {
        return this.patrol();
      }
      return Promise.resolve();
    });
};

// Activate entity damaged timer for a duration.
Entity.prototype.damaged = function() {
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
Entity.prototype.tickDamagedTimer = function() {
  if (!this.status.damaged && this.timer.damaged.frame === 0) {
    // Perform damaged.
    this.damaged().enable();
  } else {
    this.timer.damaged.frame = this.timer.damaged.frame + 1;
  }

  if (this.timer.damaged.frame > this.timer.damaged.duration) {
    // Perform undamaged.
    // Reset timer.
    this.damaged().disable();
    this.timer.damaged.frame = 0;
  }
};

// Activate entity damaged timer for a duration.
Entity.prototype.startDamagedTimer = function() {
  if (!this.status.damaged) {
    this.tickDamagedTimer();
  }
};

// Use power action.
// Can be overridden by the extending class.
Entity.prototype.powered = function() {
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
Entity.prototype.tickPoweredTimer = function() {
  if (!this.status.powered && this.timer.powered.frame === 0) {
    // Perform damaged.
    this.powered().enable();
  } else {
    this.timer.powered.frame = this.timer.powered.frame + 1;
  }

  if (this.timer.powered.frame > this.timer.powered.duration) {
    // Perform unpowered.
    // Reset timer.
    this.powered().disable();
    this.timer.powered.frame = 0;
  }
};

// Activate entity powered timer for a duration.
Entity.prototype.startPoweredTimer = function() {
  if (!this.status.powered) {
    this.tickPoweredTimer();
  }
};

// Use shield action.
// Can be overridden by the extending class.
Entity.prototype.shielded = function() {
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
Entity.prototype.tickShieldedTimer = function() {
  if (!this.status.shielded && this.timer.shielded.frame === 0) {
    // Perform damaged.
    this.shielded().enable();
  } else {
    this.timer.shielded.frame = this.timer.shielded.frame + 1;
  }

  if (this.timer.shielded.frame > this.timer.shielded.duration) {
    // Perform unshielded.
    // Reset timer.
    this.shielded().disable();
    this.timer.shielded.frame = 0;
  }
};

// Activate entity shielded timer for a duration.
Entity.prototype.startShieldedTimer = function() {
  if (!this.status.shielded) {
    this.tickShieldedTimer();
  }
};

// Activate entity explosion timer for a duration.
// Create variable amount of explosion.
Entity.prototype.startExplosionTimer = function(amount) {
  const promises = [...Array(amount)];

  promises.map((promise, idx) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Create destroy explosion.
        this.factory({
          x: this.util().range(this.x, this.x + this.width),
          y: this.util().range(this.y, this.y - this.height),
          entities: this.entities,
          creator: this
        }).explosion.destroy();

        resolve();
      }, fps * 0.5 * idx);
    });
  });

  return Promise.all(promises);
};

// Create any number and types of bullets.
// To be implemented by the extending class.
Entity.prototype.createBullets = function() {};

// Create bullets at an interval.
Entity.prototype.tickBulletTimer = function() {
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
Entity.prototype.createBombs = function() {};

// Validate if collision should occur.
Entity.prototype.validateEntityCollision = function(entity, idx, _idx) {
  return (
    // Entity cannot reference itself.
    idx !== _idx &&
    // Both entities cannot be the same faction.
    entity.faction !== this.faction &&
    // Both entities cannot be effect types.
    entity.faction !== types.faction.NONE &&
    this.faction !== types.faction.NONE &&
    // Entities cannot be bullets type.
    !(
      this.subtype === types.subtype.projectile.BULLET &&
      entity.subtype === types.subtype.projectile.BULLET
    )
  );
};

// Entity collision action.
Entity.prototype.collide = function(idx, entity) {
  if (this.subtype === types.subtype.ships.PLAYER) {
    console.log(entity);
  }
  if (this.status.alive && entity.status.alive) {
    // Exchange attack damage points.
    if (!this.status.invincible) {
      this.points.health = this.points.health - entity.points.attack;
    } else if (this.type === types.type.PROJECTILE) {
      this.status.invincible = false;
      this.status.alive = false;
    }
    if (!entity.status.invincible) {
      entity.points.health = entity.points.health - this.points.attack;
    } else if (entity.type === types.type.PROJECTILE) {
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
Entity.prototype.postCollide = function(idx, hasCollided) {
  if (hasCollided && !this.status.damaged) {
    this.startDamagedTimer();
  }
};

// Assert entity collision.
Entity.prototype.assertEntitiesCollision = function(idx) {
  // Collision flag.
  let hasCollided = false;

  // Cycle through entity collection.
  this.entities.forEach((entity, _idx) => {
    // Validate collision.
    // Assert collision.
    if (
      this.validateEntityCollision(entity, idx, _idx) &&
      this.assertCollision().entity(entity)
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

// Pre-update action.
// To be implemented by the extending class.
Entity.prototype.preUpdate = function(idx) {};

// Tick action.
Entity.prototype.tick = function(idx) {
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

// Dispose action.
Entity.prototype.dispose = function(idx) {
  this.status.disposing = true;

  if (this.status.disposing) {
    // Remove from the entities list.
    this.remove(idx);
  }
};

// Update action.
Entity.prototype.update = function(idx) {
  // Do the pre-update action.
  this.preUpdate(idx);

  // Assert alive status.
  if (this.status.alive) {
    // Do ticking timer action.
    this.tick(idx);

    // Move in vector.
    this.move({ idx });
  } else {
    // Dispose entity action.
    this.dispose(idx);
  }
};

// Render action.
Entity.prototype.render = function() {
  this.loadImage();

  if (this.faction === types.faction.ENEMY) {
    canvas.drawImageRotated({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      degrees: Math.PI
    });
  } else if (this.faction === types.faction.ALLIED) {
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  } else {
    canvas.drawImage({
      image: this.image,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    });
  }
};

// Remove this entity instance from the entities list.
Entity.prototype.remove = function(idx) {
  this.entities.splice(idx, 1);
};

module.exports = Entity;
