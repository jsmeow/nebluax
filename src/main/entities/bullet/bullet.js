const Entity = require('../entity');
const Faction = require('../base/faction');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function Bullet({ x, y, width, height, attack, faction }) {
  Faction.call(this, { x, y, width, height, attack, faction });

  /** @override **/
  this.type = Entity.types.BULLET;

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

/** @override **/
Bullet.prototype.update = function(entities, idx) {
  // Assert alive status.
  if (this.status.alive) {
    // Move in vector.
    this.move();

    // Assert boundary collision.
    // Schedule bullet to be disposed.
    if (
      this.collides().boundary.left ||
      this.collides().boundary.right ||
      this.collides().boundary.top ||
      this.collides().boundary.bottom
    ) {
      this.status.alive = false;
    }
  } else {
    // Remove from the entities list.
    this.remove(entities, idx);
  }
};

module.exports = Bullet;
