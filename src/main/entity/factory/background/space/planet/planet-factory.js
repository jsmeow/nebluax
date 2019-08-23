const Planet1 = require('../../../../type/background/space/planet/planet-1/planet-1');
const Planet2 = require('../../../../type/background/space/planet/planet-2/planet-2');
const Planet3 = require('../../../../type/background/space/planet/planet-3/planet-3');

function PlanetFactory(factory, entities) {
  this.planet1 = function(args) {
    const entity = new Planet1({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.planet2 = function(args) {
    const entity = new Planet2({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.planet3 = function(args) {
    const entity = new Planet3({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };
}

module.exports = PlanetFactory;
