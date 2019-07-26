const canvas = require('../../canvas');
const ChallengerEntity = require('../base/challenger');

// The player entity.
function Player() {
  ChallengerEntity.call(this);

  /** @override **/
  this.width = 150;
  this.height = 150;

  /** @override **/
  this.x = canvas.width * 0.5 - this.width / 2;
  this.y = canvas.height - this.height / 2;

  // The moving vectors.
  this.vector = {
    left: {
      magnitude: 0.1,
      timer: 0,
      delay: 0.05,
      startTimer: fn => {
        this.vector.left.timer = setInterval(fn, this.delay);
      },
      clearTimer: () => {
        window.clearTimeout(this.vector.left.timer);
      }
    },
    right: {
      magnitude: 0.1,
      timer: 0,
      delay: 0.05,
      startTimer: fn => {
        this.vector.right.timer = setInterval(fn, this.delay);
      },
      clearTimer: () => {
        window.clearTimeout(this.vector.right.timer);
      }
    }
  };
}

Player.prototype = Object.create(ChallengerEntity.prototype);

// Collides with a boundary detection.
ChallengerEntity.prototype.collidesBoundary = function() {
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
ChallengerEntity.prototype.collidesPoint = function() {
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
ChallengerEntity.prototype.moveDirection = function(magnitude = 0) {
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
ChallengerEntity.prototype.moveVector = function({
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
ChallengerEntity.prototype.movePoint = function({ x, y, magnitude }) {
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
ChallengerEntity.prototype.movePath = function(points) {
  return points.reduce((previousPromise, currentPoint) => {
    return previousPromise.then(() => {
      return this.movePoint({ ...currentPoint });
    });
  }, Promise.resolve());
};

module.exports = ChallengerEntity;
