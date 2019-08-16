// Returns an entity collision assertion.
function validateEntityCollision(entity) {
  return (
    this.x <= entity.x + entity.width &&
    this.x + this.width >= entity.x &&
    this.y <= entity.y + entity.height &&
    this.y + this.height >= entity.y
  );
}

module.exports = validateEntityCollision;
