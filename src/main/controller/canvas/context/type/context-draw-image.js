const { window } = require('../../../../options');

// Draws an image onto the offscreen canvas (rotation parameter optional)
function drawImage(canvas) {
  return function({ image, x, y, width, height, imageDeg, name }) {
    /* const _x = x + canvas.width * 0.5 - width * 0.5;
    const _y = y + canvas.height * 0.5 - height * 0.5;*/

    if (imageDeg) {
      /*      ctx.save();
      ctx.translate(x + width / 2, y + height / 2);
      ctx.rotate((imageDeg * Math.PI) / 180.0);
      ctx.translate(-x - width / 2, -y - height / 2);
      ctx.drawImage(image, x, y, width, height);
      ctx.restore();*/
    } else {
      canvas.ctx.drawImage(image, x, y, width, height);

      if (name.includes('CoverEntity')) {
        canvas.ctx.drawImage(image, x, y - height, width, height);
      }
    }
  };
}

module.exports = drawImage;

/*
We use the 3rd form of drawImage which lets us specify an offset and size for
  the sprite and the destination separately.

ctx.drawImage(
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
