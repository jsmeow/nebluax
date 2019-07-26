const canvas = require('../../canvas');
const Entity = require('../entity');

// An entity that can move.
function MovingEntity({ x, y, width, height } = {}) {
  Entity.call(this, { x, y, width, height });

  // The moving vector.
  this.vector = {
    magnitude: 0.1,
    timer: 0,
    delay: 0.05,
    startTimer: fn => {
      this.vector.timer = setInterval(fn, this.delay);
    },
    clearTimer: () => {
      window.clearTimeout(this.vector.timer);
    }
  };
}

MovingEntity.prototype = Object.create(Entity.prototype);

// Collides with a boundary detection.
MovingEntity.prototype.collidesBoundary = function() {
  return {
    left: (width = 0) => {
      return this.x - this.vector.magnitude <= width;
    },
    right: (width = this.width) => {
      return this.x + this.vector.magnitude <= canvas.width + width;
    },
    top: (height = 0) => {
      return this.y - this.vector.magnitude <= height;
    },
    bottom: (height = this.height) => {
      return this.y + this.vector.magnitude >= canvas.height - height;
    }
  };
};

// Collides with a point detection.
MovingEntity.prototype.collidesPoint = function() {
  return {
    left: x => {
      return x <= this.x;
    },
    right: x => {
      return x >= this.x;
    },
    up: y => {
      return y <= this.y;
    },
    down: y => {
      return y >= this.y;
    }
  };
};

// Move in a direction.
MovingEntity.prototype.moveDirection = function(magnitude = 0) {
  return {
    left: () => {
      this.x = this.x - magnitude;
    },
    right: () => {
      this.x = this.x + magnitude;
    },
    up: () => {
      this.y = this.y - magnitude;
    },
    down: () => {
      this.y = this.y + magnitude;
    }
  };
};

// Move in a vector.
MovingEntity.prototype.moveVector = function({
  left = 0,
  right = 0,
  up = 0,
  down = 0
}) {
  this.vector.startTimer(() => {
    this.moveDirection(left).left();
    this.moveDirection(right).right();
    this.moveDirection(up).up();
    this.moveDirection(down).down();
  });
};

// Move to a in a vector to a point.
MovingEntity.prototype.movePoint = function({ x, y, magnitude }) {
  return new Promise(resolve => {
    if (!this.vector.timer) {
      // Flags if vector has magnitude in a direction.
      let willMoveLeft = true;
      let willMoveRight = true;
      let willMoveUp = true;
      let willMoveDown = true;
      // Move in a vector at an interval.
      this.vector.startTimer(() => {
        // Move in a left direction.
        if (this.collidesBoundary().left(x)) {
          this.moveDirection(magnitude).left();
        } else {
          willMoveLeft = false;
        }
        // Move in a right direction.
        if (this.collidesBoundary().right(x)) {
          this.moveDirection(magnitude).right();
        } else {
          willMoveRight = false;
        }
        // Move in an up direction.
        if (this.collidesBoundary().up(y)) {
          this.moveDirection(magnitude).up();
        } else {
          willMoveUp = false;
        }
        // Move in a down direction.
        if (this.collidesBoundary().down(y)) {
          this.moveDirection(magnitude).down();
        } else {
          willMoveDown = false;
        }
        if (!willMoveLeft && !willMoveRight && !willMoveUp && !willMoveDown) {
          resolve();
        }
      });
    }
  }).then(() => {
    this.vector.clearTimer();
    return Promise.resolve();
  });
};

// Move in a vector path.
MovingEntity.prototype.movePath = function(points) {
  return points.reduce((previousPromise, currentPoint) => {
    return previousPromise.then(() => {
      return this.movePoint({ ...currentPoint });
    });
  }, Promise.resolve());
};

module.exports = MovingEntity;
