const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/bowerbird/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/bowerbird/assets/images/allied.png';
const damagedImageSrc =
  './main/entity/ship/bowerbird/assets/images/damaged.png';

function BowerbirdEntity({
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
  this.width = BowerbirdEntity.width;
  this.height = BowerbirdEntity.height;

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
  this.subtype = types.subtype.ships.BOWERBIRD;

  /** @override **/
  this.factory = factory;

  this.init();
}

BowerbirdEntity.prototype = Object.create(ShipEntity.prototype);

// Size
BowerbirdEntity.width = 60;
BowerbirdEntity.height = 60;

/** @override **/
BowerbirdEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
BowerbirdEntity.prototype.prowl = function() {
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

module.exports = BowerbirdEntity;
