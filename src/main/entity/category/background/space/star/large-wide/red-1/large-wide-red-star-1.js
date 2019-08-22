const LargeWideStar = require('../large-wide-star');
const imgSrc =
  './main/entity/category/background/space/star/large-wide/red-1/assets/images/image-source.png';

function LargeWideRedStar1({
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
      type: ['red']
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

LargeWideRedStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWideRedStar1;
