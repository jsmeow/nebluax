const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/purple-5/assets/images/image-source.png';

function SmallPurpleStar5({ x, y, width, height }) {
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

SmallPurpleStar5.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar5;
