const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/white-1/assets/images/image-source.png';

function SmallWhiteStar1({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'white'];
}

SmallWhiteStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar1;
