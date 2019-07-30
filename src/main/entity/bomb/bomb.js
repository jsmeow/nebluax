const Entity = require('../entity');
const FactionedEntity = require('../base/factioned');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function Bomb({ creator, x, y, width, height, explosion, attack, faction }) {
  FactionedEntity.call(this, { x, y, width, height, attack, faction });

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.type = Entity.types.PROJECTILE;

  /** @override **/
  this.status.invincible = true;

  /** @override **/
  this.points = {
    ...this.points,
    attack
  };

  // Explosion size.
  this.explosion = explosion;
}

Bomb.prototype = Object.create(FactionedEntity.prototype);

/** @override **/
Bomb.prototype.init = function() {
  this.loadImage();

  // Set the bomb direction.
  if (this.faction === FactionedEntity.factions.ENEMY) {
    this.dy = 4;
  } else if (this.faction === FactionedEntity.factions.ALLIED) {
    this.dy = -4;
  }
};

/** @override **/
Bomb.prototype.update = function(entities, idx) {
  // Assert alive status.
  if (this.status.alive) {
    // Move in vector.
    this.move();

    // Assert entity collision.
    // Set the size to the explosion size.
    // Create a destroy explosion if dead after collision.
    // Create a destroy explosion.
    // Schedule bomb to be disposed.
    if (this.assertEntityCollision(entities, idx)) {
      this.width = this.explosion.width;
      this.height = this.explosion.height;
      this.createExplosions().destroy(entities);
      this.status.alive = false;
    }
  } else {
    // Remove from the entities list.
    this.remove(entities, idx);
  }
};

module.exports = Bomb;
