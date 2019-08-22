const SmallStar = require('../small-star');
const imgSrc1 =
  './main/entity/category/background/space/star/small/purple-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/small/purple-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/small/purple-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingPurpleStar1({
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
      type: ['purple']
    },
    status,
    points,
    img: {
      ...img,
      src: [imgSrc1, imgSrc2, imgSrc3, imgSrc2]
    },
    meta
  });
}

SmallBlinkingPurpleStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingPurpleStar1;
