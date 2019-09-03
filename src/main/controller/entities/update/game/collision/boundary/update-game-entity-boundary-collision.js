const utils = require('../../../../../../utils/utils');

module.exports = function(entity) {
  if (
    utils.entity.assert.collision.boundary(
      entity.x,
      entity.y,
      entity.width,
      entity.height
    )
  ) {
    entity.dispose = true;
  }
};
