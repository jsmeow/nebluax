module.exports = function(entity) {
  entity.death && entity.death();
  if (!entity.alive && !entity.damaged) {
    entity.dispose = true;
  }
};
