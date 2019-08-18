const canvas = require('../../../../canvas');
const Background = require('../background');

function Space(factory) {
  Background.call(this);

  /** @override **/
  this.type = [...this.type, 'space'];

  // Background entities

  const comets = [...Array(1)].map(() => {
    return factory.background.space.comet();
  });

  const blinkingStars = [...Array(5)].map(() => {
    return factory.background.space.blinkingStar();
  });

  const mediumWhiteStars1 = [...Array(3)].map(() => {
    return factory.background.space.mediumWhiteStar1();
  });

  const mediumWhiteStars2 = [...Array(3)].map(() => {
    return factory.background.space.mediumWhiteStar2();
  });

  const mediumWhiteStars3 = [...Array(3)].map(() => {
    return factory.background.space.mediumWhiteStar3();
  });

  const smallDarkPurpleStars = [...Array(10)].map(() => {
    return factory.background.space.smallDarkPurpleStar();
  });

  const smallLightPurpleStars = [...Array(10)].map(() => {
    return factory.background.space.smallLightPurpleStar();
  });

  const smallDarkRedStars = [...Array(10)].map(() => {
    return factory.background.space.smallDarkRedStar();
  });

  const smallLightRedStars = [...Array(10)].map(() => {
    return factory.background.space.smallLightRedStar();
  });

  const smallWhiteStars = [...Array(10)].map(() => {
    return factory.background.space.smallWhiteStar();
  });

  /** @override **/
  this.entities = [
    ...comets,
    ...blinkingStars,
    ...mediumWhiteStars1,
    ...mediumWhiteStars2,
    ...mediumWhiteStars3,
    ...smallDarkPurpleStars,
    ...smallLightPurpleStars,
    ...smallDarkRedStars,
    ...smallLightRedStars,
    ...smallWhiteStars
  ];

  /** @override **/
  this.render = function() {
    canvas.drawRect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      fillStyle: '#181818'
    });

    this.entities.forEach(entity => {
      entity.render();
    });
  };
}

Space.prototype = Object.create(Background.prototype);

module.exports = Space;
