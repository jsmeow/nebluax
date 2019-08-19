const MediumBlinkingPurpleStar1 = require('../../../category/background/outer-space/star/purple/medium-blinking-1/medium-blinking-purple-star-1');
const MediumBlinkingRedStar1 = require('../../../category/background/outer-space/star/red/medium-blinking-1/medium-blinking-red-star-1');
const MediumBlinkingWhiteStar1 = require('../../../category/background/outer-space/star/white/medium-blinking-1/medium-blinking-white-star-1');
const MediumBlinkingPurpleStar2 = require('../../../category/background/outer-space/star/purple/medium-blinking-2/medium-blinking-purple-star-2');
const MediumBlinkingRedStar2 = require('../../../category/background/outer-space/star/red/medium-blinking-2/medium-blinking-red-star-2');
const MediumBlinkingWhiteStar2 = require('../../../category/background/outer-space/star/white/medium-blinking-2/medium-blinking-white-star-2');
const LargePurpleStar1 = require('../../../category/background/outer-space/star/purple/large-1/large-purple-star-1');
const LargeRedStar1 = require('../../../category/background/outer-space/star/red/large-1/large-red-star-1');
const LargeWhiteStar1 = require('../../../category/background/outer-space/star/white/large-1/large-white-star-1');
const SmallPurpleStar1 = require('../../../category/background/outer-space/star/purple/small-1/small-purple-star-1');
const SmallRedStar1 = require('../../../category/background/outer-space/star/red/small-1/small-red-star-1');
const SmallWhiteStar1 = require('../../../category/background/outer-space/star/white/small-1/small-white-star-1');
const SmallPurpleStar2 = require('../../../category/background/outer-space/star/purple/small-2/small-purple-star-2');
const SmallRedStar2 = require('../../../category/background/outer-space/star/red/small-2/small-red-star-2');
const SmallWhiteStar2 = require('../../../category/background/outer-space/star/white/small-2/small-white-star-2');
const SmallPurpleStar3 = require('../../../category/background/outer-space/star/purple/small-3/small-purple-star-3');
const SmallRedStar3 = require('../../../category/background/outer-space/star/red/small-3/small-red-star-3');
const SmallWhiteStar3 = require('../../../category/background/outer-space/star/white/small-3/small-white-star-3');
const SmallPurpleStar4 = require('../../../category/background/outer-space/star/purple/small-4/small-purple-star-4');
const SmallRedStar4 = require('../../../category/background/outer-space/star/red/small-4/small-red-star-4');
const SmallWhiteStar4 = require('../../../category/background/outer-space/star/white/small-4/small-white-star-4');
const SmallPurpleStar5 = require('../../../category/background/outer-space/star/purple/small-5/small-purple-star-5');
const SmallRedStar5 = require('../../../category/background/outer-space/star/red/small-5/small-red-star-5');
const SmallWhiteStar5 = require('../../../category/background/outer-space/star/white/small-5/small-white-star-5');
const SmallBlinkingPurpleStar1 = require('../../../category/background/outer-space/star/purple/small-blinking-1/small-blinking-purple-star-1');
const SmallBlinkingRedStar1 = require('../../../category/background/outer-space/star/red/small-blinking-1/small-blinking-red-star-1');
const SmallBlinkingWhiteStar1 = require('../../../category/background/outer-space/star/white/small-blinking-1/small-blinking-white-star-1');
const Space = require('../../../category/background/outer-space/space/space');

function OuterSpaceBackgroundFactory(factory, list) {
  this.largePurpleStar1 = function() {
    return new LargePurpleStar1();
  };

  this.largeRedStar1 = function() {
    return new LargeRedStar1();
  };
  this.largeWhiteStar1 = function() {
    return new LargeWhiteStar1();
  };

  this.mediumBlinkingPurpleStar1 = function() {
    return new MediumBlinkingPurpleStar1();
  };

  this.mediumBlinkingRedStar1 = function() {
    return new MediumBlinkingRedStar1();
  };
  this.mediumBlinkingWhiteStar1 = function() {
    return new MediumBlinkingWhiteStar1();
  };

  this.mediumBlinkingPurpleStar2 = function() {
    return new MediumBlinkingPurpleStar2();
  };

  this.mediumBlinkingRedStar2 = function() {
    return new MediumBlinkingRedStar2();
  };
  this.mediumBlinkingWhiteStar2 = function() {
    return new MediumBlinkingWhiteStar2();
  };

  this.smallPurpleStar1 = function() {
    return new SmallPurpleStar1();
  };

  this.smallRedStar1 = function() {
    return new SmallRedStar1();
  };
  this.smallWhiteStar1 = function() {
    return new SmallWhiteStar1();
  };

  this.smallPurpleStar2 = function() {
    return new SmallPurpleStar2();
  };

  this.smallRedStar2 = function() {
    return new SmallRedStar2();
  };
  this.smallWhiteStar2 = function() {
    return new SmallWhiteStar2();
  };

  this.smallPurpleStar3 = function() {
    return new SmallPurpleStar3();
  };

  this.smallRedStar3 = function() {
    return new SmallRedStar3();
  };
  this.smallWhiteStar3 = function() {
    return new SmallWhiteStar3();
  };

  this.smallPurpleStar4 = function() {
    return new SmallPurpleStar4();
  };

  this.smallRedStar4 = function() {
    return new SmallRedStar4();
  };
  this.smallWhiteStar4 = function() {
    return new SmallWhiteStar4();
  };

  this.smallPurpleStar5 = function() {
    return new SmallPurpleStar5();
  };

  this.smallRedStar5 = function() {
    return new SmallRedStar5();
  };
  this.smallWhiteStar5 = function() {
    return new SmallWhiteStar5();
  };

  this.smallBlinkingPurpleStar1 = function() {
    return new SmallBlinkingPurpleStar1();
  };

  this.smallBlinkingRedStar1 = function() {
    return new SmallBlinkingRedStar1();
  };
  this.smallBlinkingWhiteStar1 = function() {
    return new SmallBlinkingWhiteStar1();
  };

  this.space = function(args) {
    return new Space({ ...args, factory, list });
  };
}

module.exports = OuterSpaceBackgroundFactory;
