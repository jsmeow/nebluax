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
  status,
  points,
  timers,
  meta
}) {
  LargeStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['purple']
    },
    status,
    points,
    img: {
      src: [imgSrc1, imgSrc2, imgSrc3, imgSrc2]
    },
    timers,
    meta
  });
}

LargeBlinkingPurpleStar1.prototype = Object.create(LargeStar.prototype);

module.exports = LargeBlinkingPurpleStar1;
