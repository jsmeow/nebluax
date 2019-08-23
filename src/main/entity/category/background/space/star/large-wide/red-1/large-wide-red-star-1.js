const LargeWideStar = require('../large-wide-star');
const imgSrc =
  './main/entity/category/background/space/star/large-wide/red-1/assets/images/image-source.png';

function LargeWideRedStar1({
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

LargeWideRedStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWideRedStar1;
