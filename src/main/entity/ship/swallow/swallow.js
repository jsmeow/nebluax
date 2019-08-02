const canvas = require('../../../canvas');
const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/swallow/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/swallow/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/swallow/assets/images/damaged.png';

function SwallowEntity({
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

  this.width = SwallowEntity.width;
  this.height = SwallowEntity.height;

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
    health: 2,
    attack: 1,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    power: 0,
    life: 0
  };

  /** @override **/
  this.subtype = types.subtype.ships.BOWERBIRD;

  /** @override **/
  this.factory = factory;

  this.init();
}

SwallowEntity.prototype = Object.create(ShipEntity.prototype);

// Size
SwallowEntity.width = 60;
SwallowEntity.height = 60;

/** @override **/
SwallowEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
SwallowEntity.prototype.prowl = function() {
  // Set prowling flag.
  this.status.prowling = true;

  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  // Set speed.
  this.speed = 2;

  return this.point({ x: this.player.x, y: this.player.y })
    .then(() => {
      return this.point({ x: this.player.x, y: canvas.height + this.height });
    })
    .then(() => {
      return this.pause(30);
    })
    .then(() => {
      this.x = x;
      this.y = -this.height;
      return this.point({ x, y });
    })
    .then(() => {
      return this.pause(30);
    })
    .then(() => {
      // Set speed.
      this.speed = 1;
      // Set prowling flag.
      this.status.prowling = false;
      return Promise.resolve();
    });
};

module.exports = SwallowEntity;
