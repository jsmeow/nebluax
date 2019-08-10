const { fps } = require('../../../../options');

// Perform movement in a vector direction with magnitude dx, dy.
function vectorMove(index) {
  // Movement in the x and y plane.
  this.x = this.x + this.speed * this.dx;
  this.y = this.y + this.speed * this.dy;

  if (typeof index === 'number') {
    // Enable and perform collision event action, if collided.
    return this.collisionStart(index);
  }

  return false;
}

// Perform movement in a vector line towards a point.
// !warning! This is an async action unaffected by the application loop.
function vectorPoint({ x = this.x, y = this.y }) {
  // Set status flag.
  this.status.moving = true;

  // Set vector movement magnitude in x, y.
  if (!this.validatePoint().left(x)) {
    this.dx = -this.speed;
  }
  if (!this.validatePoint().right(x)) {
    this.dx = this.speed;
  }
  if (!this.validatePoint().up(y)) {
    this.dy = -this.speed;
  }
  if (!this.validatePoint().down(y)) {
    this.dy = this.speed;
  }

  // Perform movement in the x and y plane towards point.
  return new Promise(resolve => {
    // Point collision detection and status validation timer.
    // Timer delay is set to 1/fps^2.
    const timer = setInterval(() => {
      // Evaluate vector movement direction.
      if (this.dx < 0 && this.validatePoint().left(x)) {
        this.dx = 0;
      }
      if (this.dx > 0 && this.validatePoint().right(x)) {
        this.dx = 0;
      }
      if (this.dy < 0 && this.validatePoint().up(y)) {
        this.dy = 0;
      }
      if (this.dy > 0 && this.validatePoint().down(y)) {
        this.dy = 0;
      }

      // Assert point collision.
      // Assert status.
      if ((this.dx === 0 && this.dy === 0) || !this.status.alive) {
        // Set status flag.
        this.status.moving = false;

        // Clear timer.
        clearInterval(timer);

        resolve();
      }
    }, 1 / fps);
  });
}

// Perform movement in the x and y plane in a point path.
// !warning! This is an async action unaffected by the application loop.
function vectorPath(path) {
  // Set status flag.
  this.status.pathing = true;

  // Perform movement using promises for each point.
  return path
    .reduce((promise, point) => {
      return promise.then(() => {
        return this.vectorPoint(point);
      });
    }, Promise.resolve())
    .then(() => {
      // Set status flag.
      this.status.pathing = false;

      return Promise.resolve();
    });
}

module.exports = {
  vectorMove,
  vectorPoint,
  vectorPath
};
