const Entity = require('../../entity');

function BackgroundEntity(args) {
  Entity.call(this, args);

  // The y value at spawn
  this.spawnY = this.y;

  /** @override **/
  this.preRender = function() {
    this.y >= this.spawnY + this.height && Object.assign(this, { y: 0 });
  };
}

BackgroundEntity.prototype = Object.create(Entity.prototype);

BackgroundEntity.PATH = `${Entity.PATH}/type/background`;

module.exports = BackgroundEntity;
