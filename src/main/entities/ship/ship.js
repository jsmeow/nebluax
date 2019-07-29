const Entity = require('../entity');
const Faction = require('../base/faction');

// An entity with the ability to perform roaming and roam wild.
function Ship({ x, y, width, height, faction }) {
  Faction.call(this, { x, y, width, height, faction });

  /** @override **/
  this.type = Entity.types.SHIP;
}

Ship.prototype = Object.create(Faction.prototype);

// Roam in place.
Ship.prototype.roam = function() {
  // Roaming action if not roaming.
  if (!this.status.roaming) {
    // Save a reference of the original position.
    const x = this.x;
    const y = this.y;

    // Set roaming status to true.
    this.status.roaming = true;

    // Set the roaming path.
    this.coordinates = [
      { x: x - 100, y },
      { x, y },
      { x: x + 100, y },
      { x, y }
    ];
  }
};

module.exports = Ship;
