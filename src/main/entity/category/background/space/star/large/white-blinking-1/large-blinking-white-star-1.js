const LargeStar = require('../large-star');
const imgSrc1 =
  './main/entity/category/background/space/star/large/white-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/large/white-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/large/white-blinking-1/assets/images/image-source-3.png';

function LargeBlinkingWhiteStar1({
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
      type: ['white']
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

LargeBlinkingWhiteStar1.prototype = Object.create(LargeStar.prototype);

module.exports = LargeBlinkingWhiteStar1;
