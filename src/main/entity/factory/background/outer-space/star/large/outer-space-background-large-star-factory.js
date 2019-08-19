const LargeBlinkingPurpleStar1 = require('../../../../../../entity/category/background/outer-space/star/large/purple-blinking-1/large-blinking-purple-star-1');
const LargeBlinkingRedStar1 = require('../../../../../../entity/category/background/outer-space/star/large/red-blinking-1/large-blinking-red-star-1');
const LargeBlinkingWhiteStar1 = require('../../../../../../entity/category/background/outer-space/star/large/white-blinking-1/large-blinking-white-star-1');

function OuterSpaceBackgroundLargeStarFactory(factory, list) {
  this.largeBlinkingPurpleStar1 = function(args) {
    const entity = new LargeBlinkingPurpleStar1({
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

  this.largeBlinkingRedStar1 = function(args) {
    const entity = new LargeBlinkingRedStar1({
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
  this.largeBlinkingWhiteStar1 = function(args) {
    const entity = new LargeBlinkingWhiteStar1({
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

module.exports = OuterSpaceBackgroundLargeStarFactory;
