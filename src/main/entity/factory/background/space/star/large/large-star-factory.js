const LargeStar = require('../../../../../type/background/space/star/large/large-star');

function LargeStarFactory(factory, entities) {
  this.purpleBlinking1 = function(args) {
    const entity = new LargeStar({
      ...args,
      imgSrc: LargeStar.imgSrc.purpleBlinking1,
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
    const entity = new LargeStar({
      ...args,
      imgSrc: LargeStar.imgSrc.redBlinking1,
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
    const entity = new LargeStar({
      ...args,
      imgSrc: LargeStar.imgSrc.whiteBlinking1,
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

module.exports = LargeStarFactory;
