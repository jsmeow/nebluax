const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/purple-1/assets/images/image-source.png';

function SmallPurpleStar1({
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
      type: ['purple']
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

SmallPurpleStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar1;
