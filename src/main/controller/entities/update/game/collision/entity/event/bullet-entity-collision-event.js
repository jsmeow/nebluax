module.exports = function(entity, _entity) {
  if (
    !_entity.invincible &&
    entity.attack &&
    entity.faction !== _entity.faction
  ) {
    _entity.health = _entity.health - entity.attack;
    if (_entity.timers.damaged) {
      _entity.timers.damaged.init();
    }
    if (_entity.health <= 0) {
      entity.creator.score = entity.creator.score + _entity.value;
      _entity.alive = false;
    }
    entity.alive = false;
  }
};
