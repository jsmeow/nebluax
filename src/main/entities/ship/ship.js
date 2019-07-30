const Entity = require('../entity');
const Faction = require('../base/faction');

// An entity with the ability to perform prowling coordinated movements.
function Ship({ x, y, width, height, faction }) {
  Faction.call(this, { x, y, width, height, faction });

  /** @override **/
  this.status = {
    ...this.status,
    prowling: false
  };

  /** @override **/
  this.type = Entity.types.SHIP;
}

Ship.prototype = Object.create(Faction.prototype);

module.exports = Ship;
