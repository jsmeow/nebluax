const { window } = require('../../../../../../../options');
const Ship = require('../ship');

function SmallShip(args) {
  Ship.call(
    this,
    Object.assign(args, {
      damages: args.damages || SmallShip.DAMAGES
    })
  );

  // Flags if the ship entity is creating bullets at an interval
  this.firing = args.firing || true;
}

SmallShip.prototype = Object.create(Ship.prototype);

// Create a bullet
SmallShip.prototype.fireBullet = function(args) {
  this.factory.game.combat.bullet.basic.allied(
    Object.assign(args, {
      x: args.x || this.bow.x,
      y: args.y || this.bow.y
    })
  );
};

SmallShip.PATH = `${Ship.PATH}/small-ship`;
SmallShip.WIDTH = {
  BASIC: 17,
  SHIELD: 23
};
SmallShip.HEIGHT = {
  BASIC: 17,
  SHIELD: 23
};
SmallShip.HEALTH = 3;
SmallShip.ATTACK = 1;
SmallShip.DAMAGES = true;

module.exports = SmallShip;
