const { fps } = require('../../../../../../../options');
const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/white/small-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/white/small-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/white/small-blinking-1/assets/images/image-source-3.png';

function SmallBlinkingWhiteStar1() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.type = [...this.type, 'small', 'blinking', 'white'];

  /** @override **/
  this.animationTimer.delay = fps;
}

SmallBlinkingWhiteStar1.prototype = Object.create(Star.prototype);

module.exports = SmallBlinkingWhiteStar1;
