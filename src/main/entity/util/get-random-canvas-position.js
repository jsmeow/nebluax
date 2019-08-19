const canvas = require('../../canvas');
const getRandomRangedInt = require('./get-random-ranged-int');

// Get a random position within the canvas bounds
function getRandomCanvasPosition(
  { x = { min: 0, max: canvas.width }, y = { min: 0, max: canvas.height } } = {
    x: { min: 0, max: canvas.width },
    y: { min: 0, max: canvas.height }
  }
) {
  return {
    x: getRandomRangedInt(x.min, x.max),
    y: getRandomRangedInt(y.min, y.max)
  };
}

module.exports = getRandomCanvasPosition;
