const LargeBlinkingPurpleStar1 = require('../../../../../type/background/space/star/large/purple-blinking-1/large-blinking-purple-star-1');
const LargeBlinkingRedStar1 = require('../../../../../type/background/space/star/large/red-blinking-1/large-blinking-red-star-1');
const LargeBlinkingWhiteStar1 = require('../../../../../type/background/space/star/large/white-blinking-1/large-blinking-white-star-1');

function LargeStarFactory(factory, entities) {
  this.largeBlinkingPurpleStar1 = function(args) {
    const entity = new LargeBlinkingPurpleStar1({
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

  this.largeBlinkingRedStar1 = function(args) {
    const entity = new LargeBlinkingRedStar1({
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
  this.largeBlinkingWhiteStar1 = function(args) {
    const entity = new LargeBlinkingWhiteStar1({
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

module.exports = LargeStarFactory;
