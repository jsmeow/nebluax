const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/oriole/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/oriole/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/oriole/assets/images/damaged.png';

function OrioleEntity({
  x,
  y,
  width,
  height,
  entities,
  faction,
  dx,
  dy,
  factory
}) {
  ShipEntity.call(this, { x, y, width, height, entities, faction, dx, dy });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc
  };

  /** @override **/
  this.width = OrioleEntity.width;
  this.height = OrioleEntity.height;

  /** @override **/
  this.status = {
    alive: true,
    firing: true,
    invincible: false,
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
    health: 3,
    attack: 1,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    power: 0,
    life: 0
  };

  /** @override **/
  this.subtype = types.subtype.OrioleEntity;

  /** @override **/
  this.factory = factory;

  this.init();
}

OrioleEntity.prototype = Object.create(ShipEntity.prototype);

// Size
OrioleEntity.width = 60;
OrioleEntity.height = 60;

/** @override **/
OrioleEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
OrioleEntity.prototype.prowl = function() {
  // Set prowling flag.
  this.status.prowling = true;

  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  return this.point({ x: this.player.x, y: y + 150 })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x: this.player.x, y: this.y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x: this.player.x, y: this.y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x, y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      // Set prowling flag.
      this.status.prowling = false;
      return Promise.resolve();
    });
};

module.exports = OrioleEntity;
