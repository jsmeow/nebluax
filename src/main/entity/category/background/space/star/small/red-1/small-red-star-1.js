const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/red-1/assets/images/image-source.png';

function SmallRedStar1({
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

SmallRedStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar1;
