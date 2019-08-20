const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/white-2/assets/images/image-source.png';

function SmallWhiteStar2({
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

SmallWhiteStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar2;
