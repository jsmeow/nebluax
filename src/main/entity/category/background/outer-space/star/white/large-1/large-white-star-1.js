const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/outer-space/star/white/large-1/assets/images/image-source.png';

function LargeWhiteStar1() {
  Star.call(this, {
    width: canvas.pixel * 13,
    height: canvas.pixel * 9,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'large', 'white'];
}

LargeWhiteStar1.prototype = Object.create(Star.prototype);

module.exports = LargeWhiteStar1;
