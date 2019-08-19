const PlayerShipFactory = require('./player/player-ship-factory');
const SmallShipFactory = require('./small/small-ship-factory');

function ShipFactory(factory, list) {
  this.player = new PlayerShipFactory(factory, list);
  this.small = new SmallShipFactory(factory, list);
}

module.exports = ShipFactory;
