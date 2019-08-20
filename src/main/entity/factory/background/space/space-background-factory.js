const Space = require('../../../category/background/space/space');
const SpaceBackgroundPlanetFactory = require('./planet/space-background-planet-factory');
const SpaceBackgroundStarFactory = require('./star/space-background-star-factory');

function SpaceBackgroundFactory(factory, list) {
  this.planet = new SpaceBackgroundPlanetFactory(factory, list);

  this.space = function(args) {
    const entity = new Space({
      ...args,
      meta: {
        ...(args && args.meta ? args.meta : {}),
        factory,
        list
      }
    });
    list[0].push(entity);
    return entity;
  };

  this.star = new SpaceBackgroundStarFactory(factory, list);
}

module.exports = SpaceBackgroundFactory;
