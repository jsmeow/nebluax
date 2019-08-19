const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/outer-space/star/purple/small-2/assets/images/image-source.png';

function SmallPurpleStar2() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: Math.floor(Math.random() * (1.5 - 0.1 + 1) + 0.1),
    imageSource,
    minDy: 1,
    maxDy: 1.5
  });

  /** @override **/
  this.type = [...this.type, 'small', 'purple'];
}

SmallPurpleStar2.prototype = Object.create(Star.prototype);

module.exports = SmallPurpleStar2;
