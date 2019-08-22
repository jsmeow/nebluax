const SmallStar = require('../small-star');
const imgSrc =
  './main/entity/category/background/space/star/small/white-5/assets/images/image-source.png';

function SmallWhiteStar5({
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
      type: ['white']
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

SmallWhiteStar5.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar5;
