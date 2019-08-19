const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/purple-2/assets/images/image-source.png';

function SmallPurpleStar2({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'purple'];
}

SmallPurpleStar2.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar2;
