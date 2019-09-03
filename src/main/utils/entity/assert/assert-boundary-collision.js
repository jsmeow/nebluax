const canvas = require('../../../controller/canvas/canvas-controller');

function assertLeftBoundaryCollision(x) {
  return x <= 0;
}

function assertRightBoundaryCollision(x, width = 0) {
  return x >= canvas.width + width;
}

function assertTopBoundaryCollision(y) {
  return y <= 0;
}

function assertBottomBoundaryCollision(y, height = 0) {
  return y >= canvas.height - height;
}

function assertBoundaryCollision(x, y, width, height) {
  return (
    assertLeftBoundaryCollision(x) ||
    assertRightBoundaryCollision(x, width) ||
    assertTopBoundaryCollision(y) ||
    assertBottomBoundaryCollision(y, height)
  );
}

module.exports = assertBoundaryCollision;
module.exports.left = assertLeftBoundaryCollision;
module.exports.right = assertRightBoundaryCollision;
module.exports.top = assertTopBoundaryCollision;
module.exports.bottom = assertBottomBoundaryCollision;
