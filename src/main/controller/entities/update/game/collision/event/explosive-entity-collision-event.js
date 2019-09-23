const { window } = require('../../../../../../options');

module.exports = function(entity, _entity) {
  if (entity.faction !== _entity.faction) {
    entity.factory.game.combat.explosion(
      Object.assign(entity.explosion, {
        x: entity.x / window.scale,
        y: entity.y / window.scale
      })
    );
  }
};
