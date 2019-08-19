const { fps } = require('../../../../../../../options');
const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/multi-color/small-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/multi-color/small-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/multi-color/small-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingMultiColorStar1() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: Math.floor(Math.random() * (1.5 - 0.1 + 1) + 0.1),
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.type = [...this.type, 'small', 'blinking', 'multi-color'];

  /** @override **/
  this.animationTimer.delay = fps;

  console.log(this.animationTimer.delay);
}

SmallBlinkingMultiColorStar1.prototype = Object.create(Star.prototype);

module.exports = SmallBlinkingMultiColorStar1;
