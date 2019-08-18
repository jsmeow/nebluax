const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/white/small/assets/images/image-source.png';

function SmallWhiteStar() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 1,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'small', 'white'];
}

SmallWhiteStar.prototype = Object.create(Star.prototype);

module.exports = SmallWhiteStar;
