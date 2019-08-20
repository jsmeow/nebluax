const LargeWideStar = require('../large-wide-star');
const imageSource =
  './main/entity/category/background/space/star/large-wide/red-1/assets/images/image-source.png';

function LargeWideRedStar1({
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
      type: ['red']
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

LargeWideRedStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWideRedStar1;
