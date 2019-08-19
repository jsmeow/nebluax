const { fps } = require('../../../../../../../options');
const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/red/medium-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/red/medium-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/red/medium-blinking-1/assets/images/image-source-3.png';

function MediumBlinkingRedStar1() {
  Star.call(this, {
    width: canvas.pixel * 3,
    height: canvas.pixel * 3,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2],
    maxDy: 0.8
  });

  /** @override **/
  this.type = [...this.type, 'medium', 'blinking', 'purple'];

  /** @override **/
  this.animationTimer.delay = fps;
}

MediumBlinkingRedStar1.prototype = Object.create(Star.prototype);

module.exports = MediumBlinkingRedStar1;
