const LargeWidePurpleStar1 = require('../../../../../type/background/space/star/large-wide/purple-1/large-wide-purple-star-1');
const LargeWideRedStar1 = require('../../../../../type/background/space/star/large-wide/red-1/large-wide-red-star-1');
const LargeWideWhiteStar1 = require('../../../../../type/background/space/star/large-wide/white-1/large-wide-white-star-1');

function LargeWideStarFactory(factory, entities) {
  this.largeWidePurpleStar1 = function(args) {
    const entity = new LargeWidePurpleStar1({
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

  this.largeWideRedStar1 = function(args) {
    const entity = new LargeWideRedStar1({
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
  this.largeWideWhiteStar1 = function(args) {
    const entity = new LargeWideWhiteStar1({
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

module.exports = LargeWideStarFactory;
