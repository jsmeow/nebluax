const canvas = require('../../../../canvas');
const ShipTrail = require('../ship-trail');
const trail1 =
  './main/entity/category/ship-trail/blue/assets/images/trail1.png';
const trail2 =
  './main/entity/category/ship-trail/blue/assets/images/trail2.png';

function BlueShipTrail({ getTrailX, getTrailY, creator, degrees, list }) {
  ShipTrail.call(this, {
    width: BlueShipTrail.width,
    height: BlueShipTrail.height,
    getTrailX,
    getTrailY,
    creator,
    imageSources: [trail1, trail2],
    degrees,
    list
  });

  /** @override **/
  this.type = [...this.type, 'blue'];
}

BlueShipTrail.prototype = Object.create(ShipTrail.prototype);

BlueShipTrail.width = canvas.pixel * 5;
BlueShipTrail.height = canvas.pixel * 7;

module.exports = BlueShipTrail;
