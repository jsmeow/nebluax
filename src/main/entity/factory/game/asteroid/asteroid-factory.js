const Asteroid1 = require('../../../type/game/asteroid/asteroid-1/asteroid-1');

function AsteroidFactory(factory, entities) {
  this.asteroid1 = function(args) {
    const entity = new Asteroid1({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[2].push(entity);
    return entity;
  };
}

module.exports = AsteroidFactory;
