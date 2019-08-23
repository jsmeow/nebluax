const { fps } = require('../../../../../../../options');
const SmallStar = require('../small-star');
const getRandomRangedInt = require('../../../../../../util/get-random-ranged-int');
const imgSrc1 =
  './main/entity/type/background/space/star/small/multicolor-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/type/background/space/star/small/multicolor-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/type/background/space/star/small/multicolor-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingMulticolorStar1({
  pos,
  dims,
  vector,
  status,
  points,
  timers,
  meta
}) {
  SmallStar.call(this, {
    pos,
    dims,
    vector: vector || {
      speed: 0.25,
      dy: 1
    },
    props: {
      type: ['multicolor-blinking-1']
    },
    status,
    points,
    img: {
      src: [imgSrc1, imgSrc2, imgSrc3, imgSrc2]
    },
    timers: timers || {
      anim: {
        delay: getRandomRangedInt(fps * 0.5, fps * 1.5)
      }
    },
    meta
  });
}

SmallBlinkingMulticolorStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingMulticolorStar1;
