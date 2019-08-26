const { scale } = require('../../../../../../../options').window;
const canvas = require('../../../../../canvas/canvas-controller');

// Draws an image onto the offscreen canvas
function drawImageEvent(entity) {
  canvas.ctx.drawImage(
    entity.img[entity.imgIdx],
    entity.x,
    entity.y,
    entity.width * scale,
    entity.height * scale
  );

  entity.name.includes('Background') &&
    canvas.ctx.drawImage(
      entity.img[entity.imgIdx],
      entity.x,
      entity.y - entity.height,
      entity.width * scale,
      entity.height * scale
    );
}

module.exports = drawImageEvent;
