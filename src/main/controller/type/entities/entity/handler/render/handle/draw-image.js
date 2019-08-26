// Draws an image onto the offscreen canvas
function drawImage(entity) {
  entity.canvas.ctx.drawImage(
    entity.img[entity.imgIdx],
    entity.x,
    entity.y,
    entity.width,
    entity.height
  );

  entity.name.includes('Background') &&
    entity.canvas.ctx.drawImage(
      entity.img[entity.imgIdx],
      entity.x,
      entity.y - entity.height,
      entity.width,
      entity.height
    );
}

module.exports = drawImage;
