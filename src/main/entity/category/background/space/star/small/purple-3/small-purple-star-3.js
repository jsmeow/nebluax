const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/purple-3/assets/images/image-source.png';

function SmallPurpleStar3({
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

SmallPurpleStar3.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar3;
