const canvas = require('../../../canvas');

// Returns a boundary collision assertion for each cardinal direction
function assertBoundaryCollision({ x, y }, { width, height }, { dx, dy }) {
  return {
    left: x - dx <= 0,
    right: x + dx >= canvas.width + width,
    top: y - dy <= 0,
    bottom: y + dy >= canvas.height - height,
    all:
      x - dx <= 0 ||
      x + dx >= canvas.width + width ||
      y - dy <= 0 ||
      y + dy >= canvas.height - height
  };
}

module.exports = assertBoundaryCollision;
