const { fps } = require('../../options');
const types = require('../entity-types');
const Entity = require('../entity');

// This entity has no physical presence in the game.
// This entity cannot suffer from status effects.
function ExplosionEntity({
  x,
  y,
  width,
  height,
  entities,
  faction,
  dx,
  dy,
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
    dy
  });

  // The entities list.
  this.entities = entities;

  // The application user/ / player.
  this.player = this.entities[0];

  // The entity that created this entity instance.
  this.creator = creator;

  /** @override **/
  this.imageSrcs = [];
  this.imageSrc.default = this.imageSrcs[0];

  /** @override **/
  this.x = x || this.creator.x;
  this.y = y || this.creator.y;

  /** @override **/
  this.width = width || ExplosionEntity.width;
  this.height = height || ExplosionEntity.height;

  /** @override **/
  this.faction = faction || types.faction.NONE;

  /** @override **/
  this.type = types.type.EFFECT;

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
    health: 0,
    attack: 0,
    value: 0,
    score: 0
  };

  // Frame and animation duration.
  this.frame = 0;
  this.duration = fps / 8;
}

ExplosionEntity.prototype = Object.create(Entity.prototype);

// Size
ExplosionEntity.width = 60;
ExplosionEntity.height = 60;

/** @override **/
ExplosionEntity.prototype.loadImage = function() {
  if (this.frame < this.duration * 0.25) {
    this.image.src = this.imageSrcs[0];
  }
  if (this.frame >= this.duration * 0.25 && this.frame < this.duration * 0.5) {
    this.image.src = this.imageSrcs[1];
  }
  if (this.frame >= this.duration * 0.5 && this.frame < this.duration * 0.75) {
    this.image.src = this.imageSrcs[2];
  }
  if (this.frame >= this.duration * 0.75 && this.frame < this.duration) {
    this.image.src = this.imageSrcs[3];
  }

  this.frame = this.frame + 1;
};

/** @override **/
ExplosionEntity.prototype.preUpdate = function() {
  if (this.frame > this.duration) {
    this.status.alive = false;
  }
};

module.exports = ExplosionEntity;
