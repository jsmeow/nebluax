const canvas = require('../../canvas');
const Entity = require('../entity');

// An entity that can move.
function Moving({ x, y, width, height } = {}) {
  Entity.call(this, { x, y, width, height });

  // Vector magnitude and flags whether moving in a vector direction.
  this.speed = 1;

  // The change in vector movement in x, y.
  this.dx = 0;
  this.dy = 0;

  // The point to move the entity to.
  this.point = {
    x: 0,
    y: 0
  };

  // Flag is moving to a point.
  this.moving = false;

  // Moving direction.
  this.direction = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  // The path to move the entity.
  this.path = [];

  // Flag is pathing.
  this.pathing = false;
}

Moving.prototype = Object.create(Entity.prototype);

// Collision detection.
Moving.prototype.collides = function() {
  return {
    // Boundary collision.
    boundary: {
      left: this.x - this.dx <= 0,
      right: this.x + this.dx >= canvas.width + this.width,
      top: this.y - this.dy <= 0,
      bottom: this.y + this.dy >= canvas.height - this.height
    },
    // Point collision.
    point: ({ x, y }) => {
      return {
        left: x <= this.x,
        right: x >= this.x,
        up: y <= this.y,
        down: y >= this.y
      };
    }
  };
};

// Move in a vector.
Moving.prototype.move = function(
  { dx = 0, dy = 0 } = { dx: this.dx, dy: this.dy }
) {
  // Move
  this.x = this.x + this.speed * dx;
  this.y = this.y + this.speed * dy;

  if (!this.pathing && this.path.length > 0) {
    this.point = this.path.shift();

    this.pathing = true;
  }

  if (this.pathing && !this.moving) {
    this.moving = true;

    // Move to a point in a vector.
    // Directions relative to the point.
    if (this.x > this.point.x) {
      this.direction.left = true;
    }
    if (this.x < this.point.x) {
      this.direction.right = true;
    }
    if (this.y > this.point.y) {
      this.direction.up = true;
    }
    if (this.y < this.point.y) {
      this.direction.down = true;
    }

    // Move
    if (this.direction.left) {
      this.dx = dx || -1;
    }
    if (this.direction.right) {
      this.dx = dx || 1;
    }
    if (this.direction.up) {
      this.dy = dy || -1;
    }
    if (this.direction.down) {
      this.dy = dy || 1;
    }
  }

  if (this.direction.left && this.x < this.point.x) {
    this.dx = 0;
  }
  if (this.direction.right && this.x > this.point.x) {
    this.dx = 0;
  }
  if (this.direction.up && this.y < this.point.y) {
    this.dy = 0;
  }
  if (this.direction.down && this.y > this.point.y) {
    this.dy = 0;
  }

  // Stop moving when point is reached.
  if (this.dx === 0 && this.dy === 0) {
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
    };
    this.moving = false;
    this.pathing = false;
  }
};

module.exports = Moving;
