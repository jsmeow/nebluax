const Entity = require('../entity');
const Faction = require('../base/faction');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function Bullet({ creator, x, y, width, height, attack, faction }) {
  Faction.call(this, { x, y, width, height, attack, faction });

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.type = Entity.types.PROJECTILE;

  /** @override **/
  this.status.invincible = true;

  /** @override **/
  this.points.attack = attack;
}

Bullet.prototype = Object.create(Faction.prototype);

/** @override **/
Bullet.prototype.init = function() {
  this.loadImage();

  // Set the bullet direction.
  if (this.faction === Faction.factions.ENEMY) {
    this.dy = 4;
  } else if (this.faction === Faction.factions.ALLIED) {
    this.dy = -4;
  }
};

module.exports = Bullet;
