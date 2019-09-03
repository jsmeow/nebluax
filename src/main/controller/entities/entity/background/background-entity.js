const Entity = require('../entity');

function BackgroundEntity(args) {
  Entity.call(this, args);
}

BackgroundEntity.prototype = Object.create(Entity.prototype);

BackgroundEntity.PATH = `${Entity.PATH}/background`;

module.exports = BackgroundEntity;
