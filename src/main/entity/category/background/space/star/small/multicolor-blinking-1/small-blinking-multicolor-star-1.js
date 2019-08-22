const { fps } = require('../../../../../../../options');
const SmallStar = require('../small-star');
const imgSrc1 =
  './main/entity/category/background/space/star/small/multicolor-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/small/multicolor-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/small/multicolor-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingMulticolorStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
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
    img: {
      ...img,
      src: [imgSrc1, imgSrc2, imgSrc3, imgSrc2],
      delay: fps * 0.2
    },
    meta
  });
}

SmallBlinkingMulticolorStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingMulticolorStar1;
