const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/white-4/assets/images/image-source.png';

function SmallWhiteStar4({ x, y, width, height }) {
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

SmallWhiteStar4.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar4;
