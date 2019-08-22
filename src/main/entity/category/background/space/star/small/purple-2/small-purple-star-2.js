const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/purple-2/assets/images/image-source.png';

function SmallPurpleStar2({
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

SmallPurpleStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar2;
