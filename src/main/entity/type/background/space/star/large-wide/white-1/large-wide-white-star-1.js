const LargeWideStar = require('../large-wide-star');
const imgSrc =
  './main/entity/type/background/space/star/large-wide/white-1/assets/images/image-source.png';

function LargeWideWhiteStar1({
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
      type: ['white-1']
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

LargeWideWhiteStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWideWhiteStar1;
