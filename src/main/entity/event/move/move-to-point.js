const { fps } = require('../../../options');
const validatePointCollision = require('../validate/validate-point-collision');

// Perform movement in a vector line towards a point
// !Warning! This is an async action.
function moveToPoint({ x = this.x, y = this.y }) {
  this.status.moving = true;

  // Set vector movement magnitude in x, y.
  if (!validatePointCollision().left(x)) {
    this.dx = -1;
  }
  if (!validatePointCollision().right(x)) {
    this.dx = 1;
  }
  if (!validatePointCollision().up(y)) {
    this.dy = -1;
  }
  if (!validatePointCollision().down(y)) {
    this.dy = 1;
  }

  // Perform movement in the x and y plane towards point.
  return new Promise(resolve => {
    const timer = setInterval(() => {
      // Evaluate vector movement direction.
      if (this.dx < 0 && validatePointCollision().left(x)) {
        this.dx = 0;
      }
      if (this.dx > 0 && validatePointCollision().right(x)) {
        this.dx = 0;
      }
      if (this.dy < 0 && validatePointCollision().up(y)) {
        this.dy = 0;
      }
      if (this.dy > 0 && validatePointCollision().down(y)) {
        this.dy = 0;
      }

      // Clear the vector movement interval.
      if ((this.dx === 0 && this.dy === 0) || this.status.dispose === true) {
        this.status.moving = false;
        window.clearInterval(timer);
        resolve();
      }
    }, 1 / fps);
  });
}

module.exports = moveToPoint;
