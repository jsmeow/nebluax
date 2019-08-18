const Comet = require('../../../category/background/space/comet/comet');
const SmallBlinkingStarEntity = require('../../../category/background/space/star/blinking/blinking-star');
const MediumWhiteStar1 = require('../../../category/background/space/star/white/medium-1/medium-white-star-1');
const MediumWhiteStar2 = require('../../../category/background/space/star/white/medium-2/medium-white-star-2');
const MediumWhiteStar3 = require('../../../category/background/space/star/white/medium-3/medium-white-star-3');
const SmallDarkPurpleStar = require('../../../category/background/space/star/purple/small-dark/small-dark-purple-star');
const SmallLightPurpleStar = require('../../../category/background/space/star/purple/small-light/small-light-purple-star');
const SmallDarkRedStar = require('../../../category/background/space/star/red/small-dark/small-dark-red-star');
const SmallLightRedStar = require('../../../category/background/space/star/red/small-light/small-light-red-star');
const SmallWhiteStar = require('../../../category/background/space/star/white/small/small-white-star');
const Space = require('../../../category/background/space/space');

function SpaceBackgroundFactory(factory) {
  this.comet = function() {
    return new Comet();
  };

  this.blinkingStar = function() {
    return new SmallBlinkingStarEntity();
  };

  this.mediumWhiteStar1 = function() {
    return new MediumWhiteStar1();
  };

  this.mediumWhiteStar2 = function() {
    return new MediumWhiteStar2();
  };

  this.mediumWhiteStar3 = function() {
    return new MediumWhiteStar3();
  };

  this.smallDarkPurpleStar = function() {
    return new SmallDarkPurpleStar();
  };

  this.smallLightPurpleStar = function() {
    return new SmallLightPurpleStar();
  };

  this.smallDarkRedStar = function() {
    return new SmallDarkRedStar();
  };

  this.smallLightRedStar = function() {
    return new SmallLightRedStar();
  };

  this.smallWhiteStar = function() {
    return new SmallWhiteStar();
  };

  this.space = function() {
    return new Space(factory);
  };
}

module.exports = SpaceBackgroundFactory;
