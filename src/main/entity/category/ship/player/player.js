const properties = require('../../../properties/properties-entity');
const ShipEntity = require('../ship');
const allied = './main/entity/types/ship/player/assets/images/allied.png';
const damaged = './main/entity/types/ship/player/assets/images/damaged.png';
const shielded = './main/entity/types/ship/player/assets/images/shielded.png';

// The PlayerEntity entity.
function PlayerEntity(args) {
  ShipEntity.call(this, { ...args });

  /** @override **/
  this.x = properties.positions.canvas.playerSpawn.x(this);
  this.y = properties.positions.canvas.playerSpawn.y(this);

  /** @override **/
  this.faction = properties.factions.ALLIED;

  // The vector movement magnitude.
  this.d = PlayerEntity.D;

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
  this.points.health = 3;
  this.points.attack = 1;
  this.points.shield = 3;
  this.points.bomb = 3;
  this.points.mine = 3;
  this.points.power = 3;
  this.points.life = 3;

  /** @override **/
  this.type = [
    properties.types.SHIP.ID,
    properties.types.SHIP.SMALL.ID,
    properties.types.SHIP.SMALL.PLAYER
  ];

  /** @override **/
  this.imageSources.allied = allied;
  this.imageSources.enemy = allied;
  this.imageSources.damaged = damaged;
  this.imageSources.shielded = shielded;
}

PlayerEntity.prototype = Object.create(ShipEntity.prototype);

/** @override **/
PlayerEntity.D = 2;

module.exports = PlayerEntity;
