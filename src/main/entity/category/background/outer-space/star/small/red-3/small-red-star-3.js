const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/red-3/assets/images/image-source.png';

function SmallRedStar3({ x, y, width, height }) {
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

SmallRedStar3.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar3;
