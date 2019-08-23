const canvas = require('../../canvas');
const getRandomRangedInt = require('./get-random-ranged-int');

// Get a random position within the canvas bounds
function getRandomCanvasPosition(
  { x = [0, canvas.width], y = [0, canvas.height] } = {
    x: [0, canvas.width],
    y: [0, canvas.height]
  }
) {
  return {
    x: getRandomRangedInt(x[0], x[1]),
    y: getRandomRangedInt(y[0], y[1])
  };
}

module.exports = getRandomCanvasPosition;
