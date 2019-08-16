const SpaceBackgroundFactory = {
  blinkingStar: () => {
    const SmallBlinkingStarEntity = require('../../../category/background/space/star/blinking/blinking-star');
    return new SmallBlinkingStarEntity();
  },
  space: () => {
    const Space = require('../../../category/background/space/space');
    return new Space();
  }
};

module.exports = SpaceBackgroundFactory;
