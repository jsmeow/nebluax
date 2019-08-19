const MediumBlinkingPurpleStar1 = require('../../../../../../entity/category/background/outer-space/star/medium/purple-blinking-1/medium-blinking-purple-star-1');
const MediumBlinkingRedStar1 = require('../../../../../../entity/category/background/outer-space/star/medium/red-blinking-1/medium-blinking-red-star-1');
const MediumBlinkingWhiteStar1 = require('../../../../../../entity/category/background/outer-space/star/medium/white-blinking-1/medium-blinking-white-star-1');

function OuterSpaceBackgroundMediumStarFactory() {
  this.mediumBlinkingPurpleStar1 = function(args) {
    return new MediumBlinkingPurpleStar1({ ...args });
  };

  this.mediumBlinkingRedStar1 = function(args) {
    return new MediumBlinkingRedStar1({ ...args });
  };
  this.mediumBlinkingWhiteStar1 = function(args) {
    return new MediumBlinkingWhiteStar1({ ...args });
  };
}

module.exports = OuterSpaceBackgroundMediumStarFactory;
