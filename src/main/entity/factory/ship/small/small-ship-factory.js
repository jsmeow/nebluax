const Bowerbird = require('../../../category/ship/small/bowerbird/bowerbird');
const Player = require('../../../category/ship/small/player/player');

function SmallShipFactory(factory, list) {
  this.bowerbird = function(args) {
    const entity = new Bowerbird({ ...args, factory, list });
    list.push(entity);
    return entity;
  };

  this.player = function() {
    const entity = new Player(factory, list);
    list.push(entity);
    return entity;
  };
}

module.exports = SmallShipFactory;
