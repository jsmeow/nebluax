const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/purple-1/assets/images/image-source.png';

function SmallPurpleStar1({
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

SmallPurpleStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar1;
