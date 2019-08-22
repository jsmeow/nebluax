// Returns an entity collision assertion.
function assertEntityCollision(entity, _entity) {
  return (
    entity.pos.x <= _entity.pos.x + _entity.dims.width &&
    entity.pos.x + entity.dims.width >= _entity.pos.x &&
    entity.pos.y <= _entity.pos.y + _entity.dims.height &&
    entity.pos.y + entity.dims.height >= _entity.pos.y
  );
}

// Returns an entity collision event assertion
function assertEntityCollisionEvent(entity, _entity) {
  return (
    // _entity cannot reference itself
    entity.index !== _entity.index &&
    // Both entities must have status properties
    entity.status &&
    _entity.status &&
    // Both entities must be alive
    entity.status.alive &&
    _entity.status.alive &&
    // Both entities cannot be factionless
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
self.onmessage = function(message) {
  const { entity, _entity } = message.data;

  // Perform a collision assertion
  if (
    assertEntityCollisionEvent(entity, _entity) &&
    assertEntityCollision(entity, _entity)
  ) {
    // Perform a collision action

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

  self.postMessage({ entity, _entity });
};
