const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/purple/small-dark/assets/images/image-source.png';

function SmallDarkPurpleStar() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 0.5,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'small', 'purple', 'dark'];
}

SmallDarkPurpleStar.prototype = Object.create(Star.prototype);

module.exports = SmallDarkPurpleStar;
