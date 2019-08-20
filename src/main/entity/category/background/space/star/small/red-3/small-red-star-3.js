const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/red-3/assets/images/image-source.png';

function SmallRedStar3({
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

SmallRedStar3.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar3;
