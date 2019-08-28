const { ctx } = require('../../../../../canvas/canvas-controller');

// Draws an image onto the offscreen canvas
function drawImageEvent(entity) {
  ctx.drawImage(
    entity.img[entity.imgIdx],
    entity.x,
    entity.y,
    entity.width,
    entity.height
  );

  entity.name.includes('Background') &&
    ctx.drawImage(
      entity.img[entity.imgIdx],
      entity.x,
      entity.y - entity.height,
      entity.width,
      entity.height
    );
}

module.exports = drawImageEvent;
