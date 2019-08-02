const { fps } = require('../../../options');
const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/condor/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/condor/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/condor/assets/images/damaged.png';

function CondorEntity({
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
  this.width = CondorEntity.width;
  this.height = CondorEntity.height;

  /** @override **/
  this.speed = 0.25;

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
    health: 35,
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

  // Homing bullet timer.
  this.homing = {
    frame: 0,
    delay: fps * 4
  };

  this.init();
}

CondorEntity.prototype = Object.create(ShipEntity.prototype);

// Size
CondorEntity.width = 270;
CondorEntity.height = 180;

/** @override **/
CondorEntity.prototype.createBullets = function() {
  // Left side bullets
  for (let idx = 1; idx < 10; idx += 1) {
    this.factory({
      x: this.x + this.width * 0.25,
      y: this.y + this.height * 0.5,
      dx: idx * -0.1,
      dy: 1,
      entities: this.entities,
      factory: this.factory,
      creator: this
    }).projectile.bullet.standard();
  }
  // Right side bullets
  for (let idx = 10; idx > 0; idx -= 1) {
    this.factory({
      x: this.x + this.width - this.width * 0.25,
      y: this.y + this.height * 0.5,
      dx: idx * 0.1,
      dy: 1,
      entities: this.entities,
      factory: this.factory,
      creator: this
    }).projectile.bullet.standard();
  }
};

/** @override **/
CondorEntity.prototype.createHomingBullets = function() {
  this.factory({
    x: this.x + this.width * 0.25,
    y: this.y + this.height * 0.5,
    d: 2,
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bullet.homing();
  this.factory({
    x: this.x + this.width - this.width * 0.25,
    y: this.y + this.height * 0.5,
    d: 2,
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bullet.homing();
};

/** @override **/
CondorEntity.prototype.tickBulletTimer = function() {
  // Standard bullet timer.
  if (this.timer.bullet.frame < this.timer.bullet.delay) {
    // Increment timer.
    this.timer.bullet.frame = this.timer.bullet.frame + 1;
  } else {
    // Create bullets.
    // Reset timer.
    this.createBullets();
    this.timer.bullet.frame = 0;
  }

  // Homing bullet timer.
  if (this.homing.frame < this.homing.delay) {
    // Increment timer.
    this.homing.frame = this.homing.frame + 1;
  } else {
    // Create bullets.
    // Reset timer.
    this.createHomingBullets();
    this.homing.frame = 0;
  }
};

/** @override **/
CondorEntity.prototype.prowl = function() {
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

module.exports = CondorEntity;
