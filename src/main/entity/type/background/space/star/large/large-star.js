const Star = require('../star');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');

function LargeStar({ pos, dims, vector, status, imgSrc, timers, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: LargeStar.dims.width,
      height: LargeStar.dims.height
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['large']
    },
    status,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

LargeStar.prototype = Object.create(Star.prototype);

LargeStar.dims = {
  width: 5,
  height: 5
};

LargeStar.imgSrc = {
  purpleBlinking1: [
    './main/entity/type/background/space/star/large/assets/images/purple-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/large/assets/images/purple-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/large/assets/images/purple-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/large/assets/images/purple-blinking-1/image-source-2.png'
  ],
  redBlinking1: [
    './main/entity/type/background/space/star/large/assets/images/red-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/large/assets/images/red-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/large/assets/images/red-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/large/assets/images/red-blinking-1/image-source-2.png'
  ],
  whiteBlinking1: [
    './main/entity/type/background/space/star/large/assets/images/white-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/large/assets/images/white-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/large/assets/images/white-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/large/assets/images/white-blinking-1/image-source-2.png'
  ]
};

module.exports = LargeStar;
