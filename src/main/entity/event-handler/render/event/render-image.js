const { pixel, ctx } = require('../../../../canvas');

// Perform movement in vector directions dx, dy multiplied by  a vector
// magnitude
function renderImage(entity) {
  ctx.drawImage(
    entity.img.src[entity.img.idx],
    entity.pos.x,
    entity.pos.y,
    entity.dims.width * pixel,
    entity.dims.height * pixel
  );

  if (entity.props.type.includes('bg-image')) {
    ctx.drawImage(
      entity.img.src[entity.img.idx],
      entity.pos.x,
      entity.pos.y - entity.dims.height,
      entity.dims.width * pixel,
      entity.dims.height * pixel
    );
  }
}

module.exports = renderImage;
