// The spawn position y value
let spawnY = null;

module.exports = function(entity) {
  spawnY = typeof spawnY !== 'number' && entity.y;
  if (entity.y > spawnY + entity.height) {
    entity.y = 0;
  }
};
