const canvas = require('../../../canvas/canvas-controller');
const getRandomRangedInt = require('./get-random-ranged-int');

// Get a random position within the canvas bounds
function getRandomCanvasX(x = []) {
  return getRandomRangedInt(x[0] || 0, x[1] || canvas.width);
}

function getRandomCanvasY(y = []) {
  return getRandomRangedInt(y[0] || 0, y[1] || canvas.height);
}

module.exports = {
  x: getRandomCanvasX,
  y: getRandomCanvasY
};
