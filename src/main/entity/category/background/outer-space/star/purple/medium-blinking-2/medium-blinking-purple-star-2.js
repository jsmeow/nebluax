const { fps } = require('../../../../../../../options');
const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/purple/medium-blinking-2/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/purple/medium-blinking-2/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/purple/medium-blinking-2/assets/images/image-source-3.png';

function MediumBlinkingPurpleStar2() {
  Star.call(this, {
    width: canvas.pixel * 5,
    height: canvas.pixel * 5,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2],
    minDy: 0.5,
    maxDy: 0.8
  });

  /** @override **/
  this.type = [...this.type, 'medium', 'blinking', 'purple'];

  /** @override **/
  this.animationTimer.delay = fps;
}

MediumBlinkingPurpleStar2.prototype = Object.create(Star.prototype);

module.exports = MediumBlinkingPurpleStar2;
