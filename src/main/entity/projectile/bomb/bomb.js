const Entity = require('../../entity');
const Projectile = require('../projectile');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function Bomb({ x, y, width, height, entities, faction, creator }) {
  Projectile.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    creator
  });

  /** @override **/
  this.subtype = Projectile.subtypes.BOMB;

  /** @override **/
  this.status.invincible = true;

  /** @override **/
  this.points.attack = this.creator.points.attack * 3;

  // TODO: add detonated as a param
  // Create exploded when detonated = true
}

Bomb.prototype = Object.create(Projectile.prototype);

/** @override **/
Bomb.prototype.preUpdate = function(entities, idx) {
  // Assert an entity collision.
  if (this.assertEntitiesCollision(entities, idx)) {
  }

  // Assert boundary collision for projectile entity type.
  if (this.assertBoundaryCollision().all) {
    // Schedule projectile to be disposed.
    // Remove from the entities list.
    this.status.alive = false;
  }
};

module.exports = Bomb;
