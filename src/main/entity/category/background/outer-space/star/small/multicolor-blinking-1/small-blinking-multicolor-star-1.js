const SmallStar = require('../small-star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/small/multicolor-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/small/multicolor-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/small/multicolor-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingMulticolorStar1({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.type = [...this.type, 'multicolor', 'blinking'];
}

SmallBlinkingMulticolorStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingMulticolorStar1;
