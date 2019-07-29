// Const canvas = require('../../canvas');
const Entity = require('../entity');
const Faction = require('../base/faction');

// An entity with the ability to perform roaming.
function Ship({ x, y, width, height, faction }) {
  Faction.call(this, { x, y, width, height, faction });

  /** @override **/
  this.type = Entity.types.SHIP;

  /** @override **/
  this.status = {
    ...this.status,
    roaming: false
  };
}

Ship.prototype = Object.create(Faction.prototype);

module.exports = Ship;
