const Entity = require('../entity');
const FactionedEntity = require('../base/factioned');

// An entity classified as a ship.
function Projectile({ x, y, width, height, entities, faction, creator }) {
  FactionedEntity.call(this, { x, y, width, height, entities, faction });

  /** @override **/
  this.type = Entity.types.PROJECTILE;

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.status.invincible = true;

  /** @override **/
  this.points = {
    ...this.points,
    health: 1,
    attack: this.creator.points.attack,
    value: 0,
    score: 0
  };
}

Projectile.prototype = Object.create(FactionedEntity.prototype);

// Subtypes of entities.
Projectile.subtypes = {
  BULLET: 'bullet',
  BOMB: 'bomb'
};

/** @override **/
Projectile.prototype.init = function() {
  this.loadImage();

  // Set the bullet direction.
  if (this.faction === FactionedEntity.factions.ENEMY) {
    this.dy = 4;
  } else if (this.faction === FactionedEntity.factions.ALLIED) {
    this.dy = -4;
  }
};

/** @override **/
Projectile.prototype.validateEntityCollision = function(entity, idx, _idx) {
  return (
    idx !== _idx &&
    entity.type !== Entity.types.EFFECT &&
    this.faction !== entity.faction &&
    this.type !== Entity.types.EFFECT &&
    this.subtype !== Projectile.subtypes.BULLET
  );
};

/** @override **/
Projectile.prototype.collide = function(entities, idx, entity) {
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
Projectile.prototype.preUpdate = function(entities, idx) {
  // Assert an entity collision.
  this.assertEntitiesCollision(entities, idx);

  // Assert boundary collision for projectile entity type.
  if (this.assertBoundaryCollision().all) {
    // Schedule projectile to be disposed.
    // Remove from the entities list.
    this.status.alive = false;
  }
};

module.exports = Projectile;
