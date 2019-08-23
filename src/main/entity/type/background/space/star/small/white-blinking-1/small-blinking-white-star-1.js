const SmallStar = require('../small-star');
const imgSrc1 =
  './main/entity/type/background/space/star/small/white-blinking-1/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/type/background/space/star/small/white-blinking-1/assets/images/image-source-2.png';
const imgSrc3 =
  './main/entity/type/background/space/star/small/white-blinking-1/assets/images/image-source-3.png';
const imgSrc4 =
  './main/entity/type/background/space/star/small/white-blinking-1/assets/images/image-source-4.png';
const imgSrc5 =
  './main/entity/type/background/space/star/small/white-blinking-1/assets/images/image-source-5.png';

function SmallBlinkingWhiteStar1({
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
      type: ['white-blinking-1']
    },
    status,
    points,
    img: {
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
    timers,
    meta
  });
}

SmallBlinkingWhiteStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingWhiteStar1;
