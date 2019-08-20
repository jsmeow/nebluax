const Planet1 = require('../../../../category/background/space/planet/planet-1/planet-1');
const Planet2 = require('../../../../category/background/space/planet/planet-2/planet-2');
const Planet3 = require('../../../../category/background/space/planet/planet-3/planet-3');

function SpaceBackgroundPlanetFactory(factory, list) {
  this.planet1 = function(args) {
    const entity = new Planet1({
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

  this.planet2 = function(args) {
    const entity = new Planet2({
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

  this.planet3 = function(args) {
    const entity = new Planet3({
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
}

module.exports = SpaceBackgroundPlanetFactory;
