const { window } = require('../../../../../../../options');

module.exports = function(entity, _entity) {
  if (entity.faction !== _entity.faction) {
    if (_entity.timers.damaged) {
      _entity.timers.damaged.init();
    }
    entity.alive = false;
    entity.factory.game.combat.invulnerable.explosion.explosion1({
      ...entity.explosion,
      x: entity.x / window.scale,
      y: entity.y / window.scale,
      faction: entity.faction
    });
  }
};
