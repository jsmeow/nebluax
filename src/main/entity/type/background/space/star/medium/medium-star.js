const Star = require('../star');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');

function MediumStar({ pos, dims, vector, status, imgSrc, timers, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: MediumStar.dims.width,
      height: MediumStar.dims.height
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['medium']
    },
    status,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

MediumStar.prototype = Object.create(Star.prototype);

MediumStar.dims = {
  width: 3,
  height: 3
};

MediumStar.imgSrc = {
  purpleBlinking1: [
    './main/entity/type/background/space/star/medium/assets/images/purple-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/medium/assets/images/purple-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/medium/assets/images/purple-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/medium/assets/images/purple-blinking-1/image-source-2.png'
  ],
  redBlinking1: [
    './main/entity/type/background/space/star/medium/assets/images/red-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/medium/assets/images/red-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/medium/assets/images/red-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/medium/assets/images/red-blinking-1/image-source-2.png'
  ],
  whiteBlinking1: [
    './main/entity/type/background/space/star/medium/assets/images/white-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/medium/assets/images/white-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/medium/assets/images/white-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/medium/assets/images/white-blinking-1/image-source-2.png'
  ]
};

module.exports = MediumStar;
