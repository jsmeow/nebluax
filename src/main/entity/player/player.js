const canvas = require('../../canvas');
const types = require('../entity-types');
const ShipEntity = require('../ship/ship');
const defaultImageSrc = './main/entity/player/assets/images/default.png';
const damagedImageSrc = './main/entity/player/assets/images/damaged.png';
const shieldedImageSrc = './main/entity/player/assets/images/shielded.png';

// The PlayerEntity entity.
function PlayerEntity(entities, factory) {
  ShipEntity.call(this, { entities, faction: types.faction.ALLIED });

  // The entities list.
  this.entities = entities;

  /** @override **/
  this.imageSrc = {
    default: defaultImageSrc,
    enemy: null,
    allied: defaultImageSrc,
    damaged: damagedImageSrc,
    powered: null,
    shielded: shieldedImageSrc
  };

  /** @override **/
  this.x = canvas.width * 0.5 - PlayerEntity.width * 0.5;
  this.y = canvas.height - PlayerEntity.height * 2;

  /** @override **/
  this.width = PlayerEntity.width;
  this.height = PlayerEntity.height;

  /** @override **/
  this.subtype = types.subtype.ships.PLAYER;

  /** @override **/
  this.speed = 1.5;

  // Flags whether already moving in a specific direction.
  // This is necessary to avoid a keydown event delay.
  this.ddx = {
    left: false,
    right: false
  };
  this.ddy = {
    up: false,
    down: false
  };

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
    ...this.points,
    health: 3,
    attack: 1,
    value: 0,
    score: 0,
    shield: 3,
    bomb: 3,
    power: 3,
    life: 3
  };

  /** @override **/
  this.factory = factory;

  this.init();
}

PlayerEntity.prototype = Object.create(ShipEntity.prototype);

// Size
PlayerEntity.width = 60;
PlayerEntity.height = 60;

/** @override **/
PlayerEntity.prototype.startPoweredTimer = function() {
  if (!this.status.powered && this.points.power > 0) {
    this.tickPoweredTimer();
  }
};

/** @override **/
PlayerEntity.prototype.startShieldedTimer = function() {
  if (!this.status.shielded && this.points.shield > 0) {
    this.tickShieldedTimer();
  }
};

/** @override **/
PlayerEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bullet.standard();
};

/** @override **/
PlayerEntity.prototype.createBombs = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.bomb[1]();
};

/** @override **/
PlayerEntity.prototype.createMines = function() {
  this.factory({
    entities: this.entities,
    factory: this.factory,
    creator: this
  }).projectile.mine[1]();
};

module.exports = PlayerEntity;
