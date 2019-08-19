const MediumStar = require('../medium-star');
const imageSource1 =
  './main/entity/category/background/outer-space/star/medium/red-blinking-1/assets/images/image-source-1.png';
const imageSource2 =
  './main/entity/category/background/outer-space/star/medium/red-blinking-1/assets/images/image-source-2.png';
const imageSource3 =
  './main/entity/category/background/outer-space/star/medium/red-blinking-1/assets/images/image-source-3.png';

function MediumBlinkingRedStar1({ x, y, width, height }) {
  MediumStar.call(this, {
    x,
    y,
    width,
    height,
    imageSource: [imageSource1, imageSource2, imageSource3, imageSource2]
  });

  /** @override **/
  this.type = [...this.type, 'red'];
}

MediumBlinkingRedStar1.prototype = Object.create(MediumStar.prototype);

module.exports = MediumBlinkingRedStar1;
