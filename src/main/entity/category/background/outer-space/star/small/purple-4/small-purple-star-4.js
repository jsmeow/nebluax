const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/purple-4/assets/images/image-source.png';

function SmallPurpleStar4({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource
  });

  /** @override **/
  this.props.type = [...this.props.type, 'purple'];
}

SmallPurpleStar4.prototype = Object.create(SmallStar.prototype);

module.exports = SmallPurpleStar4;
