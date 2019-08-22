const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/red-1/assets/images/image-source.png';

function SmallRedStar1({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
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
    img: {
      ...img,
      src: imgSrc
    },
    meta
  });
}

SmallRedStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar1;
