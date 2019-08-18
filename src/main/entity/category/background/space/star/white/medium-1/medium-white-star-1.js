const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/white/medium-1/assets/images/image-source.png';

function MediumWhiteStar1() {
  Star.call(this, {
    width: canvas.pixel * 3,
    height: canvas.pixel * 3,
    dy: 0.5,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'medium', 'white'];
}

MediumWhiteStar1.prototype = Object.create(Star.prototype);

module.exports = MediumWhiteStar1;
