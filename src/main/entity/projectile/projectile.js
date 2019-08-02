const types = require('../entity-types');
const Entity = require('../entity');

function ProjectileEntity({
  x,
  y,
  width,
  height,
  entities,
  faction,
  dx,
  dy,
  factory,
  creator
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    dx,
    dy,
    factory
  });

  // The entities list.
  this.entities = entities;

  // The application user/ / player.
  this.player = this.entities[0];

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.faction = faction || this.creator.faction;

  /** @override **/
  this.x =
    typeof x === 'number'
      ? x
      : this.creator.x +
        this.creator.width * 0.5 -
        ProjectileEntity.width * 0.5;
  this.y =
    typeof y === 'number'
      ? y
      : this.faction === types.faction.ENEMY
      ? this.creator.y + this.creator.height
      : this.creator.y;

  /** @override **/
  this.width = width || ProjectileEntity.width;
  this.height = height || ProjectileEntity.height;

  /** @override **/
  this.dx = dx || 0;
  this.dy =
    this.faction === types.faction.ENEMY
      ? typeof dy === 'number'
        ? dy
        : ProjectileEntity.d
      : typeof dy === 'number'
      ? -dy
      : -ProjectileEntity.d;

  /** @override **/
  this.type = types.type.PROJECTILE;

  /** @override **/
  this.status = {
    alive: true,
    firing: false,
    invincible: true,
    damaged: false,
    powered: false,
    shielded: false,
    moving: false,
    pathing: false,
    roaming: false,
    prowling: false,
    patrolling: false
  };

  /** @override **/
  this.points = {
    ...this.points,
    health: 0,
    attack: this.creator.points.attack,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    power: 0,
    life: 0
  };

  /** @override **/
  this.factory = factory;
}

ProjectileEntity.prototype = Object.create(Entity.prototype);

// Size
ProjectileEntity.width = 6.667;
ProjectileEntity.height = 6.667;

// Vector magnitude.
ProjectileEntity.d = 4;

/** @override **/
ProjectileEntity.prototype.postCollide = function() {};

/** @override **/
ProjectileEntity.prototype.preUpdate = function() {
  if (this.assertCollision().boundary.all) {
    this.status.alive = false;
  }
};

/** @override **/
ProjectileEntity.prototype.tick = function() {};

/** @override **/
ProjectileEntity.prototype.dispose = function(idx) {
  this.status.disposing = true;

  if (this.status.disposing) {
    // Remove from the entities list.
    this.remove(idx);
  }
};

module.exports = ProjectileEntity;
