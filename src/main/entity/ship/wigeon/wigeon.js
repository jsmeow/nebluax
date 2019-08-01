const types = require('../../entity-types');
const ShipEntity = require('../ship');
const enemyImageSrc = './main/entity/ship/wigeon/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/wigeon/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/wigeon/assets/images/damaged.png';

function WigeonEntity({
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
  this.width = WigeonEntity.width;
  this.height = WigeonEntity.height;

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
  this.subtype = types.subtype.WigeonEntity;

  /** @override **/
  this.factory = factory;

  this.init();
}

WigeonEntity.prototype = Object.create(ShipEntity.prototype);

// Size
WigeonEntity.width = 60;
WigeonEntity.height = 60;

/** @override **/
WigeonEntity.prototype.createBullets = function() {
  this.factory({
    entities: this.entities,
    creator: this
  }).projectile.bullet.standard();
};

module.exports = WigeonEntity;
