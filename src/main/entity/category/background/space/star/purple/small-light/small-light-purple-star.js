const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/purple/small-light/assets/images/image-source.png';

function SmallLightPurpleStar() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 1,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'small', 'purple', 'light'];
}

SmallLightPurpleStar.prototype = Object.create(Star.prototype);

module.exports = SmallLightPurpleStar;
