const canvas = require('../../../../../canvas');
const Background = require('../../background');
const imageSource =
  './main/entity/category/background/outer-space/space/assets/images/image-source.png';

function Space({ factory, list }) {
  Background.call(this, {
    imageSource,
    factory,
    list
  });

  /** @override **/
  this.type = [...this.type, 'space'];

  // Background entities

  const mediumBlinkingPurpleStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.mediumBlinkingPurpleStar1();
  });

  const mediumBlinkingRedStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.mediumBlinkingRedStar1();
  });

  const mediumBlinkingWhiteStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.mediumBlinkingWhiteStar1();
  });

  const mediumBlinkingPurpleStars2 = [...Array(3)].map(() => {
    return factory.background.outerSpace.mediumBlinkingPurpleStar2();
  });

  const mediumBlinkingRedStars2 = [...Array(3)].map(() => {
    return factory.background.outerSpace.mediumBlinkingRedStar2();
  });

  const mediumBlinkingWhiteStars2 = [...Array(3)].map(() => {
    return factory.background.outerSpace.mediumBlinkingWhiteStar2();
  });

  const largePurpleStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.largePurpleStar1();
  });

  const largeRedStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.largeRedStar1();
  });

  const largeWhiteStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.largeWhiteStar1();
  });

  const smallPurpleStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallPurpleStar1();
  });

  const smallRedStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallRedStar1();
  });

  const smallWhiteStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallWhiteStar1();
  });

  const smallPurpleStars2 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallPurpleStar2();
  });

  const smallRedStars2 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallRedStar2();
  });

  const smallWhiteStars2 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallWhiteStar2();
  });

  const smallPurpleStars3 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallPurpleStar3();
  });

  const smallRedStars3 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallRedStar3();
  });

  const smallWhiteStars3 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallWhiteStar3();
  });

  const smallPurpleStars4 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallPurpleStar4();
  });

  const smallRedStars4 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallRedStar4();
  });

  const smallWhiteStars4 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallWhiteStar4();
  });

  const smallPurpleStars5 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallPurpleStar5();
  });

  const smallRedStars5 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallRedStar5();
  });

  const smallWhiteStars5 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallWhiteStar5();
  });

  const smallBlinkingPurpleStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallBlinkingPurpleStar1();
  });

  const smallBlinkingRedStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallBlinkingRedStar1();
  });

  const smallBlinkingWhiteStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.smallBlinkingWhiteStar1();
  });

  /** @override **/
  this.entities = [
    ...largePurpleStars1,
    // ...largeRedStars1,
    ...largeWhiteStars1,
    ...mediumBlinkingPurpleStars1,
    // ...mediumBlinkingRedStars1,
    ...mediumBlinkingWhiteStars1,
    ...mediumBlinkingPurpleStars2,
    // ...mediumBlinkingRedStars2,
    ...mediumBlinkingWhiteStars2,
    ...smallPurpleStars1,
    // ...smallRedStars1,
    ...smallWhiteStars1,
    ...smallPurpleStars2,
    // ...smallRedStars2,
    ...smallWhiteStars2,
    ...smallPurpleStars3,
    // ...smallRedStars3,
    ...smallWhiteStars3,
    ...smallPurpleStars4,
    // ...smallRedStars4,
    ...smallWhiteStars4,
    ...smallPurpleStars5,
    // ...smallRedStars5,
    ...smallWhiteStars5,
    ...smallBlinkingPurpleStars1,
    // ...smallBlinkingRedStars1,
    ...smallBlinkingWhiteStars1
  ];

  /** @override **/
  this.render = function() {
    if (this.isImageLoaded) {
      if (this.y >= this.height) {
        this.y = 0;
      }

      canvas.drawImage({
        image: this.image,
        x: this.x,
        y: this.y - this.height,
        width: this.width,
        height: this.height,
        degrees: this.degrees
      });

      canvas.drawImage({
        image: this.image,
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        degrees: this.degrees
      });

      this.entities.forEach(entity => {
        entity.render();
      });
    } else {
      this.loadImage();
      this.isImageLoaded = true;
    }
  };
}

Space.prototype = Object.create(Background.prototype);

module.exports = Space;
