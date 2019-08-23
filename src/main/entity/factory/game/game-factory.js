const AsteroidFactory = require('./asteroid/asteroid-factory');
const ShipFactory = require('./ship/ship-factory');

function GameFactory(factory, entities) {
  this.asteroid = new AsteroidFactory(factory, entities);
  this.ship = new ShipFactory(factory, entities);
}

module.exports = GameFactory;
