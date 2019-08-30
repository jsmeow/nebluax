const canvas = require('../../../../canvas/canvas-controller');
const getRandomRangedInt = require('./get-random-ranged-int');

// Get a random position within the canvas bounds
function getRandomCanvasX(x = []) {
  const min = typeof x[0] === 'number' ? x[0] : -canvas.width * 0.5;
  const max = typeof x[1] === 'number' ? x[1] : canvas.width * 0.5;
  return getRandomRangedInt(min, max);
}

function getRandomCanvasY(y = []) {
  const min = typeof y[0] === 'number' ? y[0] : -canvas.height * 0.5;
  const max = typeof y[1] === 'number' ? y[1] : canvas.height * 0.5;
  return getRandomRangedInt(min, max);
}

module.exports = {
  getRandomCanvasX,
  getRandomCanvasY
};
