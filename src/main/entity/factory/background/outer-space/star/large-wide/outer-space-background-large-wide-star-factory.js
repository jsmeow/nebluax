const LargeWidePurpleStar1 = require('../../../../../../entity/category/background/outer-space/star/large-wide/purple-1/large-wide-purple-star-1');
const LargeWideRedStar1 = require('../../../../../../entity/category/background/outer-space/star/large-wide/red-1/large-wide-red-star-1');
const LargeWideBlinkingWhiteStar1 = require('../../../../../../entity/category/background/outer-space/star/large-wide/white-1/large-wide-white-star-1');

function OuterSpaceBackgroundLargeWideStarFactory() {
  this.largeWidePurpleStar1 = function(args) {
    return new LargeWidePurpleStar1({ ...args });
  };

  this.largeWideRedStar1 = function(args) {
    return new LargeWideRedStar1({ ...args });
  };
  this.largeWideBlinkingWhiteStar1 = function(args) {
    return new LargeWideBlinkingWhiteStar1({ ...args });
  };
}

module.exports = OuterSpaceBackgroundLargeWideStarFactory;
