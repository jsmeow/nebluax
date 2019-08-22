const MediumStar = require('../medium-star');
const imgSrc1 =
  './main/entity/category/background/space/star/medium/white-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/medium/white-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/medium/white-blinking-1/assets/images/image-source-3.png';

function MediumBlinkingWhiteStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
  meta
}) {
  MediumStar.call(this, {
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

MediumBlinkingWhiteStar1.prototype = Object.create(MediumStar.prototype);

module.exports = MediumBlinkingWhiteStar1;
