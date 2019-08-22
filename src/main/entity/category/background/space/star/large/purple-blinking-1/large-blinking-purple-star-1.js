const LargeStar = require('../large-star');
const imgSrc1 =
  './main/entity/category/background/space/star/large/purple-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/large/purple-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/large/purple-blinking-1/assets/images/image-source-3.png';

function LargeBlinkingPurpleStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
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
    img: {
      ...img,
      src: [imgSrc1, imgSrc2, imgSrc3, imgSrc2]
    },
    meta
  });
}

LargeBlinkingPurpleStar1.prototype = Object.create(LargeStar.prototype);

module.exports = LargeBlinkingPurpleStar1;
