const { window } = require('../../../options');
const canvas = require('../../../controller/canvas/canvas-controller');
const getRandomRangedInt = require('../number/get-random-ranged-int');

// Get a random position within the canvas bounds
function getRandomCanvasPositionX(x = []) {
  const min = typeof x[0] === 'number' ? x[0] / window.scale : 0;
  const max = typeof x[1] === 'number' ? x[1] / window.scale : canvas.width;
  return getRandomRangedInt(min, max);
}

function getRandomCanvasPositionY(y = []) {
  const min = typeof y[0] === 'number' ? y[0] / window.scale : 0;
  const max = typeof y[1] === 'number' ? y[1] / window.scale : canvas.height;
  return getRandomRangedInt(min, max);
}

module.exports = {
  getRandomCanvasPositionX,
  getRandomCanvasPositionY
};
