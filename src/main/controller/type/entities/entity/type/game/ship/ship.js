const { fps } = require('../../../../../../../options');
const GameEntity = require('../game-entity');

function Ship(args) {
  GameEntity.call(this, args);

  // Flags whether the ship entity bullet timer is active
  this.firing = true;

  // Add the bullet timer creates a bullet entities on expiration
  this.timers.bulletTimer = {
    delay: (!args.bulletTimer && fps) || args.bulletTimer.delay,
    frame: 0
  };

  // Add the create bullets action to the entity update actions list
  this.actions.push(this.updateBulletSpawn.bind(this));
}

Ship.prototype = Object.create(GameEntity.prototype);

// Creates bullet entities method to be overridden by the extending ship entity
Ship.prototype.spawnBullets = function() {};

// Assert if the bullet timer expired and perform the create bullet method
// if the firing flag is set to true, otherwise reset the bullet timer frame
Ship.prototype.updateBulletSpawn = function() {
  if (
    this.firing &&
    this.timers.bulletTimer.delay === this.timers.bulletTimer.frame
  ) {
    this.spawnBullets();
  } else if (this.timers.bulletTimer.frame) {
    this.timers.bulletTimer.frame = 0;
  }
};

Ship.PATH = `${GameEntity.PATH}/ship`;

module.exports = Ship;
