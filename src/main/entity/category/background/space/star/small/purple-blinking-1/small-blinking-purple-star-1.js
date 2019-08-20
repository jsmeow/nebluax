const SmallStar = require('../small-star');
const imageSource1 =
  './main/entity/category/background/space/star/small/purple-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/space/star/small/purple-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/space/star/small/purple-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingPurpleStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  image,
  meta
}) {
  SmallStar.call(this, {
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

SmallBlinkingPurpleStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingPurpleStar1;
