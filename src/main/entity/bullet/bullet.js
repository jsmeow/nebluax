const Entity = require('../entity');
const FactionedEntity = require('../base/factioned');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function Bullet({ creator, x, y, width, height, attack, faction }) {
  FactionedEntity.call(this, { x, y, width, height, attack, faction });

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.type = Entity.types.PROJECTILE;

  /** @override **/
  this.points.attack = attack;
}

Bullet.prototype = Object.create(FactionedEntity.prototype);

/** @override **/
Bullet.prototype.init = function() {
  this.loadImage();

  // Set the bullet direction.
  if (this.faction === FactionedEntity.factions.ENEMY) {
    this.dy = 4;
  } else if (this.faction === FactionedEntity.factions.ALLIED) {
    this.dy = -4;
  }
};

module.exports = Bullet;
