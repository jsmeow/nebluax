const LargeStar = require('../large-star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/large/red-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/large/red-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/large/red-blinking-1/assets/images/image-source-3.png';

function LargeBlinkingRedStar1({ x, y, width, height }) {
  LargeStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.props.type = [...this.props.type, 'red'];
}

LargeBlinkingRedStar1.prototype = Object.create(LargeStar.prototype);

module.exports = LargeBlinkingRedStar1;
