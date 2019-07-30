const Entity = require('../entity');
const FactionedEntity = require('../base/factioned');

// An entity classified as a ship.
function Ship({ x, y, width, height, faction }) {
  FactionedEntity.call(this, { x, y, width, height, faction });

  /** @override **/
  this.type = Entity.types.SHIP;
}

Ship.prototype = Object.create(FactionedEntity.prototype);

module.exports = Ship;
