const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/asteroid/assets/images/default.png';
const alliedImageSrc = './main/entity/ship/asteroid/assets/images/default.png';
const damagedImageSrc = './main/entity/ship/asteroid/assets/images/damaged.png';

function AsteroidEntity({
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
  this.width = AsteroidEntity.width;
  this.height = AsteroidEntity.height;

  /** @override **/
  this.status = {
    alive: true,
    firing: false,
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
    health: 6,
    attack: 3,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    power: 0,
    life: 0
  };

  /** @override **/
  this.subtype = types.subtype.ships.ASTEROID;

  /** @override **/
  this.factory = factory;

  this.init();
}

AsteroidEntity.prototype = Object.create(ShipEntity.prototype);

// Size
AsteroidEntity.width = 60;
AsteroidEntity.height = 60;

/** @override **/
AsteroidEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
AsteroidEntity.prototype.prowl = function() {
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

module.exports = AsteroidEntity;
