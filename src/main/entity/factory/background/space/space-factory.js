const SpaceBackground = require('../../../type/background/space/space-background');
const PlanetFactory = require('./planet/planet-factory');
const StarFactory = require('./star/star-factory');

function SpaceFactory(factory, entities) {
  this.bg = function(args) {
    const entity = new SpaceBackground({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);

    // Swap the background and the background created entities in the entities
    // list so that the background entity is always first.
    // This is due to the fact the the background entity created entities are
    // instantiated before the actual background entity.
    // This also guarantees the correct update/render execution order.
    entities[0].splice(entities[0].length - 1);
    entities[0].unshift(entity);

    return entity;
  };

  this.planet = new PlanetFactory(factory, entities);

  this.star = new StarFactory(factory, entities);
}

module.exports = SpaceFactory;
