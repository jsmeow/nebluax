const canvas = require('../../../canvas');

// Returns a boundary collision assertion for each cardinal direction.
function validateBoundaryCollision() {
  return {
    left: this.x - this.dx <= 0,
    right: this.x + this.dx >= canvas.width + this.width,
    top: this.y - this.dy <= 0,
    bottom: this.y + this.dy >= canvas.height - this.height,
    all:
      this.x - this.dx <= 0 ||
      this.x + this.dx >= canvas.width + this.width ||
      this.y - this.dy <= 0 ||
      this.y + this.dy >= canvas.height - this.height
  };
}

module.exports = validateBoundaryCollision;
