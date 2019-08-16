// Returns an entity collision event assertion.
function validateEntityCollisionEvent(entity, index, _index) {
  return (
    // Entity cannot reference itself.
    index !== _index &&
    // Both entities must be alive.
    this.status.alive &&
    entity.status.alive &&
    // Both entities cannot be factionless.
    this.faction &&
    entity.faction &&
    // Both entities cannot share the same faction.
    this.faction !== entity.faction &&
    // Both entities cannot share the bullet type.
    !(this.type.includes('bullet') && entity.type.includes('bullet'))
  );
}

module.exports = validateEntityCollisionEvent;
