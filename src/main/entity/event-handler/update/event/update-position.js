// Perform movement in vector directions dx, dy multiplied by  a vector
// magnitude
function updatePosition(entity) {
  entity.pos.x = entity.pos.x + entity.vector.dx * entity.vector.speed;
  entity.pos.y = entity.pos.y + entity.vector.dy * entity.vector.speed;
}

module.exports = updatePosition;
