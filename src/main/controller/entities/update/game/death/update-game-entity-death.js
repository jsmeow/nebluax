module.exports = function(entity) {
  if (!entity.alive && !entity.damaged) {
    if (entity.death) {
      entity.death(entity);
    }
    entity.dispose = true;
  }
};
