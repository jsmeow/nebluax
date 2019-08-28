const canvas = require('../../../../canvas/canvas-controller');
const getRandomRangedInt = require('./get-random-ranged-int');

// Get a random position within the canvas bounds
function getRandomCanvasX(x = []) {
  const min = typeof x[0] === 'number' ? x[0] : 0;
  const max = typeof x[1] === 'number' ? x[1] : canvas.width;
  return getRandomRangedInt(min, max);
}

function getRandomCanvasY(y = []) {
  const min = typeof y[0] === 'number' ? y[0] : 0;
  const max = typeof y[1] === 'number' ? y[1] : canvas.height;
  return getRandomRangedInt(min, max);
}

module.exports = {
  getRandomCanvasX,
  getRandomCanvasY
};
