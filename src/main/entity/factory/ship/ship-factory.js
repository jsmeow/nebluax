const SmallShipFactory = require('./small/small-ship-factory');

function ShipFactory(factory, list) {
  this.small = new SmallShipFactory(factory, list);
}

module.exports = ShipFactory;
