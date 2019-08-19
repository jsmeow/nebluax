const LargeWidePurpleStar1 = require('../../../../../../entity/category/background/outer-space/star/large-wide/purple-1/large-wide-purple-star-1');
const LargeWideRedStar1 = require('../../../../../../entity/category/background/outer-space/star/large-wide/red-1/large-wide-red-star-1');
const LargeWideBlinkingWhiteStar1 = require('../../../../../../entity/category/background/outer-space/star/large-wide/white-1/large-wide-white-star-1');

function OuterSpaceBackgroundLargeWideStarFactory(factory, list) {
  this.largeWidePurpleStar1 = function(args) {
    const entity = new LargeWidePurpleStar1({
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

  this.largeWideRedStar1 = function(args) {
    const entity = new LargeWideRedStar1({
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
  this.largeWideBlinkingWhiteStar1 = function(args) {
    const entity = new LargeWideBlinkingWhiteStar1({
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

module.exports = OuterSpaceBackgroundLargeWideStarFactory;
