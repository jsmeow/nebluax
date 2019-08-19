const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/outer-space/star/red/large-1/assets/images/image-source.png';

function LargeRedStar1() {
  Star.call(this, {
    width: canvas.pixel * 13,
    height: canvas.pixel * 9,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'large', 'red'];
}

LargeRedStar1.prototype = Object.create(Star.prototype);

module.exports = LargeRedStar1;
