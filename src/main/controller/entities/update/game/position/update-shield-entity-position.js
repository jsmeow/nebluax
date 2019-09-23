module.exports = function(entity) {
  entity.x = entity.parent.x + (entity.parent.width - entity.width) * 0.5;
  entity.y = entity.parent.y + (entity.parent.height - entity.height) * 0.5;
};
