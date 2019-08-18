const BlueShipTrail = require('../../category/ship-trail/blue/blue-ship-trail');

function ShipTrailFactory(list) {
  this.blueShipTrail = function(args) {
    const entity = new BlueShipTrail({ ...args, list });
    list.push(entity);
    return entity;
  };
}

module.exports = ShipTrailFactory;
