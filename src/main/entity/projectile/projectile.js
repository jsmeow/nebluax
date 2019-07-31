const Entity = require('../entity');
const FactionedEntity = require('../factioned');

// An entity classified as a ship.
function ProjectileEntity({
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
  FactionedEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    dx,
    dy,
    faction
  });

  // The entities list.
  this.entities = entities;

  // The application user/ / player.
  this.player = this.entities[0];

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.type = Entity.types.PROJECTILE;

  /** @override **/
  this.faction = this.creator.faction;

  /** @override **/
  this.x =
    x ||
    this.creator.x + this.creator.width * 0.5 - ProjectileEntity.width * 0.5;
  this.y =
    y || this.faction === FactionedEntity.factions.ENEMY
      ? this.creator.y + ProjectileEntity.height
      : this.creator.y;

  /** @override **/
  this.width = width || ProjectileEntity.width;
  this.height = height || ProjectileEntity.height;

  /** @override **/

  this.dx = dx || 0;
  this.dy =
    this.faction === FactionedEntity.factions.ENEMY
      ? dy || ProjectileEntity.d
      : -dy || -ProjectileEntity.d;

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

ProjectileEntity.prototype = Object.create(FactionedEntity.prototype);

// Size
ProjectileEntity.width = 6.667;
ProjectileEntity.height = 6.667;

// Vector magnitude.
ProjectileEntity.d = 4;

/** @override **/
ProjectileEntity.prototype.postCollide = function(idx, hasCollided) {};

/** @override **/
ProjectileEntity.prototype.preUpdate = function(idx) {};

/** @override **/
ProjectileEntity.prototype.tick = function(idx) {};

/** @override **/
ProjectileEntity.prototype.dispose = function(idx) {
  // Remove from the entities list.
  this.remove(idx);
};

module.exports = ProjectileEntity;
