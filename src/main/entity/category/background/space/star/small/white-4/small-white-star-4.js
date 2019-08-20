const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/white-4/assets/images/image-source.png';

function SmallWhiteStar4({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  image,
  meta
}) {
  SmallStar.call(this, {
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

SmallWhiteStar4.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar4;
