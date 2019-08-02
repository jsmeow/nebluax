const { fps } = require('../../options');
const types = require('../entity-types');
const Entity = require('../entity');

function ShipEntity(
  {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    entities = [],
    faction = types.faction.ENEMY,
    dx = 0,
    dy = 0
  } = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    entities: [],
    faction: types.faction.ENEMY,
    dx: 0,
    dy: 0
  }
) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    dx,
    dy
  });

  /** @override **/
  this.type = types.type.SHIP;
}

ShipEntity.prototype = Object.create(Entity.prototype);

// Create an pause in action.
// Used for prowling.
ShipEntity.prototype.pause = function(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, fps * delay);
  });
};

/** @override **/

ShipEntity.prototype.postCollide = function(idx, hasCollided) {
  if (hasCollided && !this.status.damaged) {
    this.startDamagedTimer();

    // Create destroy explosions.
    this.startExplosionTimer(2);
  }
};

/** @override **/
ShipEntity.prototype.dispose = function(idx) {
  // Create destroy explosions.
  this.startExplosionTimer(3).then(() => {
    this.status.disposing = true;
  });

  if (this.status.disposing) {
    // Remove from the entities list.
    this.remove(idx);
  }
};

module.exports = ShipEntity;
