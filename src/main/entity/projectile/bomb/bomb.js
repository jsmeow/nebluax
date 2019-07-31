const Entity = require('../../entity');
const ProjectileEntity = require('../projectile');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function BombEntity({
  x,
  y,
  width,
  height,
  entities,
  dx,
  dy,
  faction,
  creator
}) {
  ProjectileEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    dx,
    dy,
    faction,
    creator
  });

  /** @override **/
  this.subtype = ProjectileEntity.subtypes.BOMB;

  /** @override **/
  this.status.invincible = true;

  this.x = x || creator.x + creator.width * 0.5 - this.width * 0.5;
  this.y = y || creator.y;

  /** @override **/
  this.points.attack = this.creator.points.attack * 3;

  // TODO: add detonated as a param
  // Create exploded when detonated = true
}

/** @override **/
BombEntity.prototype.validateEntityCollision = function(entity, idx, _idx) {
  return (
    idx !== _idx &&
    entity.type !== Entity.types.EFFECT &&
    this.faction !== entity.faction &&
    this.type !== Entity.types.EFFECT &&
    this.subtype !== ProjectileEntity.subtypes.BULLET
  );
};

/** @override **/
BombEntity.prototype.collide = function(entities, idx, entity) {
  if (!entity.status.invincible) {
    // Exchange attack damage points.
    entity.points.health = entity.points.health - this.points.attack;

    if (entity.points.health <= 0) {
      // Assert alive status.
      entity.status.alive = false;

      // Add to the entity score.
      this.creator.points.score =
        this.creator.points.score + entity.points.value;
    }

    // Schedule projectile to be disposed.
    this.status.alive = false;
  }
};

/** @override **/
BombEntity.prototype.preUpdate = function(entities, idx) {
  // Assert an entity collision.
  this.assertEntitiesCollision(entities, idx);

  // Assert boundary collision for projectile entity type.
  if (this.assertBoundaryCollision().all) {
    // Schedule projectile to be disposed.
    // Remove from the entities list.
    this.status.alive = false;
  }
};

module.exports = ProjectileEntity;
