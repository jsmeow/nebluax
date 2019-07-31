const canvas = require('../../canvas');
const Entity = require('../entity');
const AggressiveEntity = require('../aggressive');
const FactionedEntity = require('../factioned');
const StandardBullet = require('../projectile/bullet/standard/standard-bullet');
const defaultImageSrc = './main/entity/player/assets/images/default.png';
const damagedImageSrc = './main/entity/player/assets/images/damaged.png';
const shieldedImageSrc = './main/entity/player/assets/images/shielded.png';

// The player entity.
function Player({ x, y, width, height, entities, dx, dy }) {
  AggressiveEntity.call(this, { x, y, width, height, entities, dx, dy });

  // The entities list.
  this.entities = entities;

  /** @override **/
  this.imageSrc = {
    ...this.imageSrc,
    default: defaultImageSrc,
    damaged: damagedImageSrc,
    shielded: shieldedImageSrc
  };

  /** @override **/
  this.width = Player.width;
  this.height = Player.height;

  /** @override **/
  this.x = canvas.width * 0.5 - this.width * 0.5;
  this.y = canvas.height - this.height * 2;

  /** @override **/
  this.type = Entity.types.PLAYER;

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
  this.status.firing = true;

  /** @override **/
  this.points = {
    ...this.points,
    health: 5,
    attack: 1,
    value: 0,
    score: 0,
    shield: 3,
    bomb: 3,
    power: 3,
    life: 3
  };

  /** @override **/
  this.faction = FactionedEntity.factions.ALLIED;

  this.init();
}

Player.prototype = Object.create(AggressiveEntity.prototype);

// Size
Player.width = 60;
Player.height = 60;

/** @override **/
Player.prototype.startPoweredTimer = function() {
  if (!this.status.powered && this.points.power > 0) {
    this.tickPoweredTimer();
  }
};

/** @override **/
Player.prototype.startShieldedTimer = function() {
  if (!this.status.shielded && this.points.shield > 0) {
    this.tickShieldedTimer();
  }
};

/** @override **/
Player.prototype.createBullets = function() {
  this.entities.push(
    new StandardBullet({ entities: this.entities, creator: this })
  );
};

module.exports = Player;
