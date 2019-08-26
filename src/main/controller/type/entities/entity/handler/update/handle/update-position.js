// Perform movement in vector directions dx, dy multiplied by  a vector
// magnitude
function updatePosition(entity) {
  entity.x = entity.x + entity.dx * entity.speed;
  entity.y = entity.y + entity.dy * entity.speed;
}

module.exports = updatePosition;
