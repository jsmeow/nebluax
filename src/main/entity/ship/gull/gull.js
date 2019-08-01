const canvas = require('../../../canvas');
const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/gull/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/gull/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/gull/assets/images/damaged.png';

function GullEntity({
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
  this.width = GullEntity.width;
  this.height = GullEntity.height;

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
  this.subtype = types.subtype.ships.GULL;

  /** @override **/
  this.factory = factory;

  this.init();
}

GullEntity.prototype = Object.create(ShipEntity.prototype);

// Size
GullEntity.width = 60;
GullEntity.height = 60;

/** @override **/
GullEntity.prototype.createBullets = function() {
  this.factory({
    x: this.x,
    y: this.y + this.width * 0.5,
    dx: -4,
    dy: 0,
    entities: this.entities,
    creator: this
  }).projectile.bullet.standard();
  this.factory({
    x: this.x + this.width,
    y: this.y + this.width * 0.5,
    dx: 4,
    dy: 0,
    entities: this.entities,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
GullEntity.prototype.prowl = function() {
  // Set prowling flag.
  this.status.prowling = true;

  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  return this.point({ x, y: canvas.height - this.height })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x, y: this.height });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x, y: canvas.height - this.height });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x, y });
    })
    .then(() => {
      // Set prowling flag.
      this.status.prowling = false;
      return Promise.resolve();
    });
};

module.exports = GullEntity;
