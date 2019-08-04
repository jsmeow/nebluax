function BackgroundFactory() {
  this.comet = () => {
    const CometEntity = require('../types/background/space/comet/comet');
    return new CometEntity();
  };

  this.mediumWhite3Star = () => {
    const MediumWhite3StarEntity = require('../types/background/space/star/medium/white/3/medium-white-3-star');
    return new MediumWhite3StarEntity();
  };

  this.mediumWhite5Star = () => {
    const MediumWhite5StarEntity = require('../types/background/space/star/medium/white/5/medium-white-5-star');
    return new MediumWhite5StarEntity();
  };

  this.mediumWhite7Star = () => {
    const MediumWhite7StarEntity = require('../types/background/space/star/medium/white/7/medium-white-7-star');
    return new MediumWhite7StarEntity();
  };

  this.nebula1 = () => {
    const Nebula1Entity = require('../types/background/space/nebula/1/nebula-1');
    return new Nebula1Entity();
  };

  this.smallBlinkingStar = () => {
    const SmallBlinkingStarEntity = require('../types/background/space/star/small/blinking/small-blinking-star');
    return new SmallBlinkingStarEntity();
  };

  this.smallDarkPurpleStar = () => {
    const SmallDarkPurpleStarEntity = require('../types/background/space/star/small/purple/dark/small-dark-purple-star');
    return new SmallDarkPurpleStarEntity();
  };

  this.smallDarkRedStar = () => {
    const SmallDarkRedStarEntity = require('../types/background/space/star/small/red/dark/small-dark-red-star');
    return new SmallDarkRedStarEntity();
  };

  this.smallLightPurpleStar = () => {
    const SmallLightPurpleStarEntity = require('../types/background/space/star/small/purple/light/small-light-purple-star');
    return new SmallLightPurpleStarEntity();
  };

  this.smallLightRedStar = () => {
    const SmallLightRedStarEntity = require('../types/background/space/star/small/red/light/small-light-red-star');
    return new SmallLightRedStarEntity();
  };

  this.smallWhiteStar = () => {
    const SmallWhiteStarEntity = require('../types/background/space/star/small/white/small-white-star');
    return new SmallWhiteStarEntity();
  };

  this.space = () => {
    const SpaceEntity = require('../types/background/space/space');
    return new SpaceEntity();
  };
}

module.exports = new BackgroundFactory();
