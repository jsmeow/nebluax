const Background = require('../../background');
const imageSource =
  './main/entity/category/background/outer-space/space/assets/images/image-source.png';

function Space({ pos, dims, vector, props, status, points, image, meta }) {
  Background.call(this, {
    pos,
    dims,
    vector,
    props: {
      ...props,
      type: ['outer-space', 'space']
    },
    status,
    points,
    image: {
      ...image,
      src: imageSource
    },
    meta
  });

  // Background entities

  /** @override **/
  this.entities = [
    ...[...Array(3)].map(() => {
      return this.meta.factory.background.outerSpace.star.small.smallPurpleStar1();
    }),
    ...[...Array(3)].map(() => {
      return this.meta.factory.background.outerSpace.star.small.smallBlinkingMulticolorStar1();
    })
  ];
}

Space.prototype = Object.create(Background.prototype);

module.exports = Space;
