const MediumStar = require('../../../../../type/background/space/star/medium/medium-star');

function MediumStarFactory(factory, entities) {
  this.purpleBlinking1 = function(args) {
    const entity = new MediumStar({
      ...args,
      imgSrc: MediumStar.imgSrc.purpleBlinking1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.redBlinking1 = function(args) {
    const entity = new MediumStar({
      ...args,
      imgSrc: MediumStar.imgSrc.redBlinking1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.whiteBlinking1 = function(args) {
    const entity = new MediumStar({
      ...args,
      imgSrc: MediumStar.imgSrc.whiteBlinking1,
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

module.exports = MediumStarFactory;
