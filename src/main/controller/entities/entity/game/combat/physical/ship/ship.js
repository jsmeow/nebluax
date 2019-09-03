const PhysicalEntity = require('../physical-entity');

function Ship(args) {
  PhysicalEntity.call(this, args);

  // Flags if the ship entity is creating/firing bullets at an interval
  this.firing = typeof args.firing === 'boolean' ? args.firing : true;
}

Ship.prototype = Object.create(PhysicalEntity.prototype);

Ship.PATH = `${PhysicalEntity.PATH}/ship`;

module.exports = Ship;
