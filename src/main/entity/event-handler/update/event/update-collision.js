// Returns an entity collision assertion
function assertCollision(entity, _entity) {
  return (
    entity.pos.x <= _entity.pos.x + _entity.dims.width &&
    entity.pos.x + entity.dims.width >= _entity.pos.x &&
    entity.pos.y <= _entity.pos.y + _entity.dims.height &&
    entity.pos.y + entity.dims.height >= _entity.pos.y
  );
}

// Returns an entity collision event assertion
function assertCollisionEvent(entity, _entity, index, _index) {
  return (
    // Entity cannot reference itself
    index !== _index &&
    // Both entities must have the a status object property
    entity.status &&
    _entity.status &&
    // Both entities must be alive
    entity.status.alive &&
    _entity.status.alive &&
    // Both entities must have a faction object property
    entity.props.faction &&
    _entity.props.faction &&
    // Both entities cannot share the same faction
    entity.props.faction !== _entity.props.faction &&
    // Both entities cannot share the bullet type
    !(
      entity.props.type.includes('bullet') &&
      _entity.props.type.includes('bullet')
    )
  );
}

// Perform a collision assertion and collision action
function updateCollision(entity, index) {
  entity.meta.entities.forEach((_entity, _index) => {
    if (
      assertCollisionEvent(entity, _entity, index, _index) &&
      assertCollision(entity, _entity)
    ) {
      if (!entity.status.invincible) {
        entity.points.health = entity.points.health - _entity.points.attack;

        if (_entity.props.type.includes('bullet')) {
          _entity.status.alive = false;
          _entity.status.dispose = true;
        }
      }

      if (!_entity.status.invincible) {
        _entity.points.health = _entity.points.health - entity.points.attack;

        if (entity.props.type.includes('bullet')) {
          entity.status.alive = false;
          entity.status.dispose = true;
        }
      }

      if (entity.points.health <= 0) {
        if (_entity.meta.creator) {
          _entity.meta.creator.points.score =
            _entity.meta.creator.points.score + entity.points.value;
        } else {
          _entity.points.score = _entity.points.score + entity.points.value;
        }
        entity.status.alive = false;
        entity.status.dispose = true;
      }

      if (_entity.points.health <= 0) {
        if (entity.meta.creator) {
          entity.meta.creator.points.score =
            entity.meta.creator.points.score + _entity.points.value;
        } else {
          entity.points.score = entity.points.score + _entity.points.value;
        }
        _entity.status.alive = false;
        _entity.status.dispose = true;
      }

      if (!entity.status.collided) {
        entity.status.collided = true;
      }

      if (!_entity.status.collided) {
        _entity.status.collided = true;
      }
    }
  });
}

module.exports = updateCollision;
