const MediumStar = require('../medium-star');
const imgSrc1 =
  './main/entity/category/background/space/star/medium/red-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/background/space/star/medium/red-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/category/background/space/star/medium/red-blinking-1/assets/images/image-source-3.png';

function MediumBlinkingRedStar1({
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
      type: ['red']
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

MediumBlinkingRedStar1.prototype = Object.create(MediumStar.prototype);

module.exports = MediumBlinkingRedStar1;
