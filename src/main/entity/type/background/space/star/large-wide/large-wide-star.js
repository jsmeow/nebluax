const Star = require('../star');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');

function LargeWideStar({ pos, dims, vector, status, imgSrc, timers, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: LargeWideStar.dims.width,
      height: LargeWideStar.dims.height
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['large-wide']
    },
    status,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

LargeWideStar.prototype = Object.create(Star.prototype);

LargeWideStar.dims = {
  width: 13,
  height: 9
};

LargeWideStar.imgSrc = {
  purple1:
    './main/entity/type/background/space/star/large-wide/assets/images/purple-1/image-source.png',
  red1:
    './main/entity/type/background/space/star/large-wide/assets/images/red-1/image-source.png',
  white1:
    './main/entity/type/background/space/star/large-wide/assets/images/white-1/image-source.png'
};

module.exports = LargeWideStar;
