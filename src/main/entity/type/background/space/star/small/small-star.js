const Star = require('../star');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');

function SmallStar({ pos, dims, vector, status, imgSrc, timers, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: SmallStar.dims.width,
      height: SmallStar.dims.height
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 1.5))(),
      dy: 1
    },
    props: {
      type: ['small']
    },
    status,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

SmallStar.prototype = Object.create(Star.prototype);

SmallStar.dims = {
  width: 1,
  height: 1
};

SmallStar.imgSrc = {
  multicolorBlinking1: [
    './main/entity/type/background/space/star/small/assets/images/multicolor-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/small/assets/images/multicolor-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/small/assets/images/multicolor-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/small/assets/images/multicolor-blinking-1/image-source-2.png'
  ],
  purple1:
    './main/entity/type/background/space/star/small/assets/images/purple-1/image-source.png',
  purple2:
    './main/entity/type/background/space/star/small/assets/images/purple-2/image-source.png',
  purple3:
    './main/entity/type/background/space/star/small/assets/images/purple-3/image-source.png',
  purpleBlinking1: [
    './main/entity/type/background/space/star/small/assets/images/purple-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/small/assets/images/purple-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/small/assets/images/purple-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/small/assets/images/purple-blinking-1/image-source-2.png'
  ],
  red1:
    './main/entity/type/background/space/star/small/assets/images/red-1/image-source.png',
  red2:
    './main/entity/type/background/space/star/small/assets/images/red-2/image-source.png',
  red3:
    './main/entity/type/background/space/star/small/assets/images/red-3/image-source.png',
  redBlinking1: [
    './main/entity/type/background/space/star/small/assets/images/red-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/small/assets/images/red-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/small/assets/images/red-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/small/assets/images/red-blinking-1/image-source-2.png'
  ],
  white1:
    './main/entity/type/background/space/star/small/assets/images/white-1/image-source.png',
  white2:
    './main/entity/type/background/space/star/small/assets/images/white-2/image-source.png',
  white3:
    './main/entity/type/background/space/star/small/assets/images/white-3/image-source.png',
  white4:
    './main/entity/type/background/space/star/small/assets/images/white-4/image-source.png',
  white5:
    './main/entity/type/background/space/star/small/assets/images/white-5/image-source.png',
  whiteBlinking1: [
    './main/entity/type/background/space/star/small/assets/images/white-blinking-1/image-source-1.png',
    './main/entity/type/background/space/star/small/assets/images/white-blinking-1/image-source-2.png',
    './main/entity/type/background/space/star/small/assets/images/white-blinking-1/image-source-3.png',
    './main/entity/type/background/space/star/small/assets/images/white-blinking-1/image-source-2.png'
  ]
};

module.exports = SmallStar;
