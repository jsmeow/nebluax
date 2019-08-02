const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/heron/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/heron/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/heron/assets/images/damaged.png';

function HeronEntity({
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
  this.width = HeronEntity.width;
  this.height = HeronEntity.height;

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

HeronEntity.prototype = Object.create(ShipEntity.prototype);

// Size
HeronEntity.width = 60;
HeronEntity.height = 60;

/** @override **/
HeronEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
HeronEntity.prototype.createMines = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.mine[1]();
};

/** @override **/
HeronEntity.prototype.prowl = function() {
  // Set prowling flag.
  this.status.prowling = true;

  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  return this.point({ x: x + 200, y: y + 150 })
    .then(() => {
      return this.pause(10).then(() => {
        this.createMines();
        return Promise.resolve();
      });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x: x - 200, y: y + 150 });
    })
    .then(() => {
      return this.pause(10).then(() => {
        this.createMines();
        return Promise.resolve();
      });
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

module.exports = HeronEntity;
