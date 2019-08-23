const BlueShipTrail = require('../../type/game/ship-trail/blue/blue-ship-trail');

function ShipTrailFactory(entities) {
  this.blueShipTrail = function(args) {
    const entity = new BlueShipTrail({ ...args, entities });
    entities.push(entity);
    return entity;
  };
}

module.exports = ShipTrailFactory;
