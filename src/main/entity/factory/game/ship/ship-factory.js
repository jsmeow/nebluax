const PlayerShipFactory = require('./player/player-ship-factory');
const SmallShipFactory = require('./small/small-ship-factory');

function ShipFactory(factory, entities) {
  this.player = new PlayerShipFactory(factory, entities);
  this.small = new SmallShipFactory(factory, entities);
}

module.exports = ShipFactory;
