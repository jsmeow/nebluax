module.exports = function(entity, _entity) {
  /*  if (
    !entity.invincible &&
    _entity.attack &&
    entity.faction !== _entity.faction
  ) {
    entity.health = entity.health - _entity.attack;
    entity.timers.damaged.init();
  }

  if (entity.health <= 0) {
    _entity.score = _entity.score + entity.value;
    entity.alive = false;
  }*/

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
      entity.score = entity.score + _entity.value;
      _entity.alive = false;
    }
  }

  /*  if (_entity.health <= 0) {
    if (entity.creator) {
      entity.creator.score = entity.creator.score + _entity.value;
    } else {
      entity.score = entity.score + _entity.value;
    }
    _entity.alive = false;
  }*/
};
