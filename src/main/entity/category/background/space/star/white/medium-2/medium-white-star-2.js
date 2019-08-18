const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/white/medium-2/assets/images/image-source.png';

function MediumWhiteStar2() {
  Star.call(this, {
    width: canvas.pixel * 5,
    height: canvas.pixel * 5,
    dy: 0.5,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'medium', 'white'];
}

MediumWhiteStar2.prototype = Object.create(Star.prototype);

module.exports = MediumWhiteStar2;
