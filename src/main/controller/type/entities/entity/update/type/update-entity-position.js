// Perform movement in vector directions dx, dy multiplied by  a vector
// magnitude
function updateEntityPosition(entity, dt) {
  entity.x = entity.x + entity.dx * entity.speed * dt;
  entity.y = entity.y + entity.dy * entity.speed * dt;
}

module.exports = updateEntityPosition;
