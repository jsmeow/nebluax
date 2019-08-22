const Space = require('../../../category/background/space/space');
const SpaceBackgroundPlanetFactory = require('./planet/space-background-planet-factory');
const SpaceBackgroundStarFactory = require('./star/space-background-star-factory');

function SpaceBackgroundFactory(factory, entities) {
  this.planet = new SpaceBackgroundPlanetFactory(factory, entities);

  this.space = function(args) {
    const entity = new Space({
      ...args,
      meta: {
        ...(args && args.meta ? args.meta : {}),
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

  this.star = new SpaceBackgroundStarFactory(factory, entities);
}

module.exports = SpaceBackgroundFactory;
