const AsteroidFactory = require('./asteroid/asteroid-factory');

function GameFactory(factory, entities) {
  this.asteroid = new AsteroidFactory(factory, entities);
}

module.exports = GameFactory;
