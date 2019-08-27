const canvas = require('../../../../canvas/canvas-controller');

// Returns a boundary collision assertion for each cardinal direction

function hasCollidedLeftBoundary(x) {
  return x <= 0;
}

function hasCollidedRightBoundary(x, width) {
  return x >= canvas.width + width;
}

function hasCollidedTopBoundary(y) {
  return y <= 0;
}

function hasCollidedBottomBoundary(y, height) {
  return y >= canvas.height - height;
}

function hasCollidedBoundary({ x, y }, { width, height }) {
  return (
    hasCollidedLeftBoundary(x) &&
    hasCollidedRightBoundary(x, width) &&
    hasCollidedTopBoundary(y) &&
    hasCollidedBottomBoundary(y, height)
  );
}

module.exports = {
  left: hasCollidedLeftBoundary,
  right: hasCollidedRightBoundary,
  top: hasCollidedTopBoundary,
  bttm: hasCollidedBottomBoundary,
  any: hasCollidedBoundary
};
