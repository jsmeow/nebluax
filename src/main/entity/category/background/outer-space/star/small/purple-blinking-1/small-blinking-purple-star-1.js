const SmallStar = require('../small-star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/small/purple-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/small/purple-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/small/purple-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingPurpleStar1({ x, y, width, height }) {
  SmallStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.type = [...this.type, 'purple', 'blinking'];
}

SmallBlinkingPurpleStar1.prototype = Object.create(SmallStar.prototype);

module.exports = SmallBlinkingPurpleStar1;
