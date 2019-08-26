const Entity = require('../../entity');

function Background(args) {
  Entity.call(this, { ...args });

  /** @override **/
  this.preUpdate = function() {
    this.y >= this.height && Object.assign(this, { y: 0 });
  };
}

Background.prototype = Object.create(Entity.prototype);

Background.PATH = './main/controller/type/entities/entity/type/background';

module.exports = Background;
