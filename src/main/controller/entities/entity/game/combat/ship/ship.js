const { window } = require('../../../../../../options');
const CombatEntity = require('../combat-entity');

function Ship(args) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      damages: args.damages || Ship.DAMAGES
    })
  );

  // Position coordinates of the ship bow
  this.bow = {
    x: (args.bow && args.bow.x) || this.getBowPosition().x,
    y: (args.bow && args.bow.y) || this.getBowPosition().y
  };

  // Flags if the ship entity is creating bullets at an interval
  this.firing = args.firing || Ship.FIRING;
}

Ship.prototype = Object.create(CombatEntity.prototype);

Ship.prototype.getBowPosition = function() {
  const degrees = (this.rotation * Math.PI) / 180;
  return {
    x: this.x + this.width * 0.5 * (1 + Math.sin(degrees)),
    y: this.y + this.height * 0.5 * (1 - Math.cos(degrees))
  };
};

Ship.PATH = `${CombatEntity.PATH}/ship`;
Ship.DAMAGES = true;
Ship.FIRING = true;

module.exports = Ship;
