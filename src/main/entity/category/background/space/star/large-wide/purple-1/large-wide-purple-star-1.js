const LargeWideStar = require('../large-wide-star');
const imgSrc =
  './main/entity/category/background/space/star/large-wide/purple-1/assets/images/image-source.png';

function LargeWidePurpleStar1({
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
      type: ['purple']
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

LargeWidePurpleStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWidePurpleStar1;
