const utils = require('../../../../../utils/utils');

module.exports = function(entity) {
  if (utils.entity.assert.collision.boundary.bottom(entity.y)) {
    entity.x = utils.entity.position.x.rng();
    entity.y = -entity.height;
  }
};
