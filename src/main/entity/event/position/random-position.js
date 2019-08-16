const canvas = require('../../../canvas');

// Get new a new random x, y coordinate position.
function randomPosition(
  { width = {}, height = {} } = {
    width: { min: 0, max: canvas.width },
    height: { min: 0, max: canvas.height }
  }
) {
  width.min = width && width.min ? width.min : 0;
  width.max = width && width.max ? width.max : canvas.width;

  height.min = height && height.min ? height.min : 0;
  height.max = height && height.max ? height.max : canvas.height;

  this.x = Math.floor(Math.random() * (width.max - width.min + 1) + width.min);
  this.y = Math.floor(
    Math.random() * (height.max - height.min + 1) + height.min
  );
}

module.exports = randomPosition;
