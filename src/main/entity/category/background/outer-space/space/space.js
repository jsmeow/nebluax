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

  const smallPurpleStars1 = [...Array(3)].map(() => {
    return factory.background.outerSpace.star.small.smallPurpleStar1();
  });

  /** @override **/
  this.entities = [...smallPurpleStars1];

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
