const canvas = require('../../../../../../../canvas');
const Star = require('../../star');
const imageSource =
  './main/entity/category/background/space/star/red/small-light/assets/images/image-source.png';

function SmallLightRedStar() {
  Star.call(this, {
    width: canvas.pixel,
    height: canvas.pixel,
    dy: 1,
    imageSource
  });

  /** @override **/
  this.type = [...this.type, 'small', 'red', 'light'];
}

SmallLightRedStar.prototype = Object.create(Star.prototype);

module.exports = SmallLightRedStar;
