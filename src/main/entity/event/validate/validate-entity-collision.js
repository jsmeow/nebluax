// Returns an entity collision assertion.
function validateEntityCollision(entity, _entity) {
  return (
    entity.x <= _entity.x + _entity.width &&
    entity.x + entity.width >= _entity.x &&
    entity.y <= _entity.y + _entity.height &&
    entity.y + entity.height >= _entity.y
  );
}

module.exports = validateEntityCollision;
