const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/red-2/assets/images/image-source.png';

function SmallRedStar2({ pos, dims, vector, status, points, timers, meta }) {
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

SmallRedStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar2;
