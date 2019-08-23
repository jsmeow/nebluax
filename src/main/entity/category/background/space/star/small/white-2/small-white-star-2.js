const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/white-2/assets/images/image-source.png';

function SmallWhiteStar2({ pos, dims, vector, status, points, timers, meta }) {
  SmallStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      type: ['white']
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

SmallWhiteStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar2;
