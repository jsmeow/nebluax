const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/white/medium-3/assets/images/image-source.png';

function MediumWhiteStar3() {
  Star.call(this, {
    width: canvas.pixel * 7,
    height: canvas.pixel * 7,
    dy: 0.5,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'medium', 'white'];
}

MediumWhiteStar3.prototype = Object.create(Star.prototype);

module.exports = MediumWhiteStar3;
