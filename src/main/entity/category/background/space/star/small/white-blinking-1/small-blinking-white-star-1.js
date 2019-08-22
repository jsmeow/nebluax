const SmallStar = require('../small-star');
const imgSrc1 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-3.png';
const imgSrc4 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-4.png';
const imgSrc5 =
  './main/entity/category/background/space/star/small/white-blinking-1/assets/images/image-source-5.png';

function SmallBlinkingWhiteStar1({
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
      type: ['white']
    },
    status,
    points,
    img: {
      ...img,
      src: [
        imgSrc1,
        imgSrc2,
        imgSrc3,
        imgSrc4,
        imgSrc5,
        imgSrc4,
        imgSrc3,
        imgSrc2
      ]
    },
    meta
  });
}

SmallBlinkingWhiteStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingWhiteStar1;
