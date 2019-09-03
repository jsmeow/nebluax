const { fps } = require('../../../options');
const assertPointCollision = require('../collision/assert-point-collision');

// Perform movement in a line towards a point
// !Warning! This is an async action.
function moveToPoint({ x = this.pos.x, y = this.pos.y }) {
  this.status.moving = true;

  // Set vector direction in x, y
  if (!assertPointCollision().left(x)) {
    this.vector.dx = -1;
  }
  if (!assertPointCollision().right(x)) {
    this.vector.dx = 1;
  }
  if (!assertPointCollision().up(y)) {
    this.vector.dy = -1;
  }
  if (!assertPointCollision().down(y)) {
    this.vector.dy = 1;
  }

  return new Promise(resolve => {
    const timer = setInterval(() => {
      // Evaluate vector movement direction
      if (this.vector.dx < 0 && assertPointCollision().left(x)) {
        this.vector.dx = 0;
      }
      if (this.vector.dx > 0 && assertPointCollision().right(x)) {
        this.vector.dx = 0;
      }
      if (this.vector.dy < 0 && assertPointCollision().up(y)) {
        this.vector.dy = 0;
      }
      if (this.vector.dy > 0 && assertPointCollision().down(y)) {
        this.vector.dy = 0;
      }

      // Clear the vector movement interval
      if (
        (this.vector.dx === 0 && this.vector.dy === 0) ||
        this.status.dispose === true
      ) {
        this.status.moving = false;
        window.clearInterval(timer);
        resolve();
      }
    }, 1 / fps);
  });
}

module.exports = moveToPoint;
