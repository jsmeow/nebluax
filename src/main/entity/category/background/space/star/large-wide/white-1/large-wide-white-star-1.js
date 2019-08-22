const LargeWideStar = require('../large-wide-star');
const imgSrc =
  './main/entity/category/background/space/star/large-wide/white-1/assets/images/image-source.png';

function LargeWideWhiteStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
  meta
}) {
  LargeWideStar.call(this, {
    pos,
    dims,
    vector,
    props: {
      ...props,
      type: ['white']
    },
    status,
    points,
    img: {
      ...img,
      src: imgSrc
    },
    meta
  });
}

LargeWideWhiteStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWideWhiteStar1;
