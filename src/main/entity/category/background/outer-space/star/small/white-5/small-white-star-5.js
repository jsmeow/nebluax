const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/white-5/assets/images/image-source.png';

function SmallWhiteStar5({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource
  });

  /** @override **/
  this.props.type = [...this.props.type, 'white'];
}

SmallWhiteStar5.prototype = Object.create(SmallStar.prototype);

module.exports = SmallWhiteStar5;
