const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/red/small-dark/assets/images/image-source.png';

function SmallDarkRedStar() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 0.5,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'small', 'red', 'dark'];
}

SmallDarkRedStar.prototype = Object.create(Star.prototype);

module.exports = SmallDarkRedStar;
