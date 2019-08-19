const LargeBlinkingPurpleStar1 = require('../../../../../../entity/category/background/outer-space/star/large/purple-blinking-1/large-blinking-purple-star-1');
const LargeBlinkingRedStar1 = require('../../../../../../entity/category/background/outer-space/star/large/red-blinking-1/large-blinking-red-star-1');
const LargeBlinkingWhiteStar1 = require('../../../../../../entity/category/background/outer-space/star/large/white-blinking-1/large-blinking-white-star-1');

function OuterSpaceBackgroundLargeStarFactory() {
  this.largeBlinkingPurpleStar1 = function(args) {
    return new LargeBlinkingPurpleStar1({ ...args });
  };

  this.largeBlinkingRedStar1 = function(args) {
    return new LargeBlinkingRedStar1({ ...args });
  };
  this.largeBlinkingWhiteStar1 = function(args) {
    return new LargeBlinkingWhiteStar1({ ...args });
  };
}

module.exports = OuterSpaceBackgroundLargeStarFactory;
