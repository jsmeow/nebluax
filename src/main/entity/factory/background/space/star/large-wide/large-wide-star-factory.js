const LargeWideStar = require('../../../../../type/background/space/star/large-wide/large-wide-star');

function LargeWideStarFactory(factory, entities) {
  this.purple1 = function(args) {
    const entity = new LargeWideStar({
      ...args,
      imgSrc: LargeWideStar.imgSrc.purple1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.red1 = function(args) {
    const entity = new LargeWideStar({
      ...args,
      imgSrc: LargeWideStar.imgSrc.red1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.white1 = function(args) {
    const entity = new LargeWideStar({
      ...args,
      imgSrc: LargeWideStar.imgSrc.white1,
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

module.exports = LargeWideStarFactory;
