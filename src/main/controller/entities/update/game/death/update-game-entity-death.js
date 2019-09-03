module.exports = function(entity) {
  entity.onDeath && entity.onDeath();
  if (!entity.alive && !entity.damaged) {
    entity.dispose = true;
  }
};
