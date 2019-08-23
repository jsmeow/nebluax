const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/type/background/space/star/small/white-3/assets/images/image-source.png';

function SmallWhiteStar3({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['white-3']
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

SmallWhiteStar3.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar3;
