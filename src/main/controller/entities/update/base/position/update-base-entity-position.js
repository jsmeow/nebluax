module.exports = function(entity, _, dt) {
  entity.x = entity.x + entity.dx * entity.speed * dt;
  entity.y = entity.y + entity.dy * entity.speed * dt;
};
