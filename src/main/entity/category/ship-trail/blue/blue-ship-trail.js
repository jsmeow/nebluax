const canvas = require('../../../../canvas');
const ShipTrail = require('../ship-trail');
const imgSrc1 =
  './main/entity/category/ship-trail/blue/assets/images/image-source-1.png';
const imgSrc2 =
  './main/entity/category/ship-trail/blue/assets/images/image-source-2.png';

function BlueShipTrail({ degrees, creator, entities, getX, getY }) {
  ShipTrail.call(this, {
    width: BlueShipTrail.width,
    height: BlueShipTrail.height,
    imgSrc: [imgSrc1, imgSrc2],
    degrees,
    creator,
    entities,
    getX,
    getY
  });

  /** @override **/
  this.props.type = [...this.props.type, 'blue'];
}

BlueShipTrail.prototype = Object.create(ShipTrail.prototype);

BlueShipTrail.width = canvas.res * 5;
BlueShipTrail.height = canvas.res * 7;

module.exports = BlueShipTrail;
