const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/type/background/space/star/small/purple-1/assets/images/image-source.png';

function SmallPurpleStar1({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['purple-1']
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

SmallPurpleStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar1;
