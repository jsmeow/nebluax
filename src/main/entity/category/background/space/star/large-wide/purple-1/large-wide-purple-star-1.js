const LargeWideStar = require('../large-wide-star');
const imageSource =
  './main/entity/category/background/space/star/large-wide/purple-1/assets/images/image-source.png';

function LargeWidePurpleStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  image,
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
    image: {
      ...image,
      src: imageSource
    },
    meta
  });
}

LargeWidePurpleStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWidePurpleStar1;
