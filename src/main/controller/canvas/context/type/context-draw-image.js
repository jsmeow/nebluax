// const { window } = require('../../../../options');

// Draws an image onto the offscreen canvas (rotation parameter optional)
function drawImage({ context }) {
  return function({ image, x, y, width, height, rotation, name }) {
    if (rotation) {
      context.save();
      context.translate(x + width / 2, y + height / 2);
      context.rotate((rotation * Math.PI) / 180.0);
      context.translate(-x - width / 2, -y - height / 2);
      context.drawImage(image, x, y, width, height);
      context.restore();
    } else {
      context.drawImage(image, x, y, width, height);
      if (name.includes('CoverEntity')) {
        context.drawImage(image, x, y - height, width, height);
      }
    }
  };
}

module.exports = drawImage;

/*
We use the 3rd form of drawImage which lets us specify an offset and size for
  the sprite and the destination separately.

context.drawImage(
  resources.get(this.url),
  x,
  y,
  this.size[0],
  this.size[1],
  0,
  0,
  this.size[0],
  this.size[1]
);
*/
