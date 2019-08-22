const Player = require('../../../category/ship/player/player');

function PlayerShipFactory(factory, entities) {
  this.player = function() {
    const entity = new Player(factory, entities);
    entities.push(entity);
    return entity;
  };
}

module.exports = PlayerShipFactory;
