// Returns an entity collision event assertion
function assertEntityCollisionEvent(entity, _entity, index, _index) {
  return (
    // Entity cannot reference itself
    index !== _index &&
    // Both entities must have status properties
    entity.status &&
    _entity.status &&
    // Both entities must be alive
    entity.status.alive &&
    _entity.status.alive &&
    // Both entities cannot be factionless
    entity.faction &&
    _entity.faction &&
    // Both entities cannot share the same faction
    entity.faction !== _entity.faction &&
    // Both entities cannot share the bullet type
    !(entity.props.type.includes('bullet') && _entity.props.type.includes('bullet'))
  );
}

module.exports = assertEntityCollisionEvent;
