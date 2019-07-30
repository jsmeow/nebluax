const { fps } = require('../../options');
const canvas = require('../../canvas');
const Entity = require('../entity');

// An entity that can move.
function MovingEntity({ x, y, width, height } = {}) {
  Entity.call(this, { x, y, width, height });

  // The statuses an entity can take.
  // Extending entities may implement more statuses.
  this.status = {
    moving: false,
    pathing: false,
    roaming: false,
    prowling: false,
    patrolling: false
  };

  // Vector movement magnitude.
  this.speed = 1;

  // The change in vector movement in x, y.
  this.dx = 0;
  this.dy = 0;
}

MovingEntity.prototype = Object.create(Entity.prototype);

// Assert boundary collision.
MovingEntity.prototype.assertBoundaryCollision = function() {
  return {
    left: this.x - this.dx <= 0,
    right: this.x + this.dx >= canvas.width + this.width,
    top: this.y - this.dy <= 0,
    bottom: this.y + this.dy >= canvas.height - this.height
  };
};

// Assert point collision.
MovingEntity.prototype.assertPointCollision = function() {
  return {
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
  };
};

// Move in a vector.
MovingEntity.prototype.move = function(
  { dx = 0, dy = 0 } = { dx: this.dx, dy: this.dy }
) {
  // Perform movement in the x and y plane.
  this.x = this.x + this.speed * dx;
  this.y = this.y + this.speed * dy;
};

// Move in a vector line towards a point.
// Accepts a vector movement magnitude as a parameter.
MovingEntity.prototype.point = function({ x, y, d = 1 }) {
  // Set movement flag.
  this.status.moving = true;

  // Set vector movement magnitude in x, y.
  if (!this.assertPointCollision().left(x)) {
    this.dx = -d;
  }
  if (!this.assertPointCollision().right(x)) {
    this.dx = d;
  }
  if (!this.assertPointCollision().up(y)) {
    this.dy = -d;
  }
  if (!this.assertPointCollision().down(y)) {
    this.dy = d;
  }

  // Begin moving towards point.
  return new Promise(resolve => {
    // The point collision detection polling timer.
    const polling = setInterval(() => {
      // Evaluate movement vector directions.
      if (this.dx < 0 && this.assertPointCollision().left(x)) {
        this.dx = 0;
      }
      if (this.dx > 0 && this.assertPointCollision().right(x)) {
        this.dx = 0;
      }
      if (this.dy < 0 && this.assertPointCollision().up(y)) {
        this.dy = 0;
      }
      if (this.dy > 0 && this.assertPointCollision().down(y)) {
        this.dy = 0;
      }

      // Clear polling if:
      // Entity has reached the point.
      // Entity has died.
      if ((this.dx === 0 && this.dy === 0) || !this.status.alive) {
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
MovingEntity.prototype.path = function(path) {
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
MovingEntity.prototype.roam = function() {
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
  this.status.patrolling = true;

  // ...implementation

  // Set prowling flag.
  this.status.patrolling = false;
  return Promise.resolve();
};

// Patrolling movement/action.
// Loops between roaming and prowling.
Entity.prototype.patrol = function() {
  // Set patrolling flag.
  this.status.patrolling = true;

  return this.roam()
    .then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, fps * 10);
      });
    })
    .then(() => {
      return this.prowl();
    })
    .then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, fps * 10);
      });
    })
    .then(() => {
      if (this.status.patrolling) {
        return this.patrol();
      }
      return Promise.resolve();
    });
};

module.exports = MovingEntity;
