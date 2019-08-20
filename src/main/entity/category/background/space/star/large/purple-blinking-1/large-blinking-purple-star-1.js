const LargeStar = require('../large-star');
const imageSource1 =
  './main/entity/category/background/space/star/large/purple-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/space/star/large/purple-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/space/star/large/purple-blinking-1/assets/images/image-source-3.png';

function LargeBlinkingPurpleStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  image,
  meta
}) {
  LargeStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      ...props,
      type: ['purple']
    },
    status,
    points,
    image: {
      ...image,
      src: [imageSource1, imageSource2, imageSource3, imageSource2]
    },
    meta
  });
}

LargeBlinkingPurpleStar1.prototype = Object.create(LargeStar.prototype);

module.exports = LargeBlinkingPurpleStar1;
