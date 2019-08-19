const { fps } = require('../../../../../../../options');
const SmallStar = require('../small-star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/small/multicolor-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/small/multicolor-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/small/multicolor-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingMulticolorStar1({
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
      type: ['multicolor-blinking']
    },
    status,
    points,
    image: {
      ...image,
      src: [imageSource1, imageSource2, imageSource3],
      delay: fps * 0.2
    },
    meta
  });
}

SmallBlinkingMulticolorStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingMulticolorStar1;
