const SmallStar = require('../small-star');
const imageSource1 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-3.png';
const imageSource4 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-4.png';
const imageSource5 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-5.png';

function SmallBlinkingWhiteStar1({
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
      type: ['white']
    },
    status,
    points,
    image: {
      ...image,
      src: [
        imageSource1,
        imageSource2,
        imageSource3,
        imageSource4,
        imageSource5,
        imageSource4,
        imageSource3,
        imageSource2
      ]
    },
    meta
  });
}

SmallBlinkingWhiteStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingWhiteStar1;
