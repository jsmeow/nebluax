const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/type/background/space/star/small/red-1/assets/images/image-source.png';

function SmallRedStar1({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['red']
    },
    status,
    points,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

SmallRedStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar1;
