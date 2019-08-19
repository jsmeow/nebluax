const SmallStar = require('../small-star');
const imageSource =
  './main/entity/category/background/outer-space/star/small/red-1/assets/images/image-source.png';

function SmallRedStar1({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource
  });

  /** @override **/
  this.props.type = [...this.props.type, 'red'];
}

SmallRedStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallRedStar1;
