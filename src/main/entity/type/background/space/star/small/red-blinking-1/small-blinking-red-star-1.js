const SmallStar = require('../small-star');
const imgSrc1 =
  './main/entity/type/background/space/star/small/red-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/type/background/space/star/small/red-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/type/background/space/star/small/red-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingRedStar1({
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
    vector,
    props: {
      type: ['red-blinking-1']
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

SmallBlinkingRedStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingRedStar1;
