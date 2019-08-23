const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/purple-3/assets/images/image-source.png';

function SmallPurpleStar3({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['purple']
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

SmallPurpleStar3.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar3;
