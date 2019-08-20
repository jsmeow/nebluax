const LargeWideStar = require('../large-wide-star');
const imageSource =
  './main/entity/category/background/space/star/large-wide/white-1/assets/images/image-source.png';

function LargeWideWhiteStar1({
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
      type: ['white']
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

LargeWideWhiteStar1.prototype = Object.create(LargeWideStar.prototype);

module.exports = LargeWideWhiteStar1;
