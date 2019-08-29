// Draws an image onto the offscreen canvas (rotation parameter optional)
function drawImage({ ctx }) {
  return function({ img, imgIdx, x, y, width, height, imgDeg, name }) {
    if (Array.isArray(img)) {
      if (imgDeg) {
        ctx.save();
        ctx.translate(x + width / 2, y + height / 2);
        ctx.rotate((imgDeg * Math.PI) / 180.0);
        ctx.translate(-x - width / 2, -y - height / 2);
        ctx.drawImage(img[imgIdx], x, y, width, height);
        ctx.restore();
      } else {
        ctx.drawImage(img[imgIdx], x, y, width, height);

        if (name.includes('Background')) {
          ctx.drawImage(img[imgIdx], x, y - height, width, height);
        }
      }
    } else {
      ctx.drawImage(img, x, y, width, height);
    }
  };
}

module.exports = drawImage;
