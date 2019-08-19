const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/red-5/assets/images/image-source.png';

function SmallRedStar5({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'red'];
}

SmallRedStar5.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar5;
