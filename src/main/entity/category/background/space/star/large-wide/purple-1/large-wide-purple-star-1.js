const LargeWideStar = require('../large-wide-star');
const imgSrc =
  './main/entity/category/background/space/star/large-wide/purple-1/assets/images/image-source.png';

function LargeWidePurpleStar1({
  pos,
  dims,
  vector,
  status,
  points,
  timers,
  meta
}) {
  LargeWideStar.call(this, {
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

LargeWidePurpleStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWidePurpleStar1;
