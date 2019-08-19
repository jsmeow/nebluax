const Player = require('../../../category/ship/player/player');

function PlayerShipFactory(factory, list) {
  this.player = function() {
    const entity = new Player(factory, list);
    list.push(entity);
    return entity;
  };
}

module.exports = PlayerShipFactory;
