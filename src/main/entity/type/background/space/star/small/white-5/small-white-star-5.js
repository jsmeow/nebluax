const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/type/background/space/star/small/white-5/assets/images/image-source.png';

function SmallWhiteStar5({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['white-5']
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

SmallWhiteStar5.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar5;
