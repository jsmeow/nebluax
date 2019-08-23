const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/type/background/space/star/small/purple-2/assets/images/image-source.png';

function SmallPurpleStar2({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['purple-2']
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

SmallPurpleStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar2;
