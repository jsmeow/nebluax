module.exports = function(spawnY) {
  return function(entity) {
    if (entity.y > spawnY + entity.height) {
      entity.y = 0;
    }
  };
};
