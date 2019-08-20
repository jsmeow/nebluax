const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/space/star/small/red-2/assets/images/image-source.png';

function SmallRedStar2({
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

SmallRedStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar2;
