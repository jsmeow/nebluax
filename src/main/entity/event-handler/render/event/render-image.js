const { ctx } = require('../../../../canvas');

// Perform movement in vector directions dx, dy multiplied by  a vector
// magnitude
function renderImage(entity) {
  ctx.drawImage(
    entity.img.src[entity.img.idx],
    entity.pos.x,
    entity.pos.y,
    entity.dims.width,
    entity.dims.height
  );

  if (entity.props.type.includes('background')) {
    ctx.drawImage(
      entity.img.src[entity.img.idx],
      entity.pos.x,
      entity.pos.y - entity.dims.height,
      entity.dims.width,
      entity.dims.height
    );
  }
}

module.exports = renderImage;
