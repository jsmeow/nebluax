const { ctx } = require('../../../../canvas');
const { scale } = require('../../../../options');

// Renders an image onto the offscreen canvas
function renderImage(entity) {
  ctx.drawImage(
    entity.img.src[entity.img.idx],
    entity.pos.x,
    entity.pos.y,
    entity.dims.width * scale,
    entity.dims.height * scale
  );

  if (entity.props.type.includes('bg-image')) {
    ctx.drawImage(
      entity.img.src[entity.img.idx],
      entity.pos.x,
      entity.pos.y - entity.dims.height,
      entity.dims.width * scale,
      entity.dims.height * scale
    );
  }
}

module.exports = renderImage;
