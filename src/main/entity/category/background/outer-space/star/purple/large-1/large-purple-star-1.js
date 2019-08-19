const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/outer-space/star/purple/large-1/assets/images/image-source.png';

function LargePurpleStar1() {
  Star.call(this, {
    width: canvas.pixel * 13,
    height: canvas.pixel * 9,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'large', 'purple'];
}

LargePurpleStar1.prototype = Object.create(Star.prototype);

module.exports = LargePurpleStar1;
