const canvas = require('../../canvas');
const Entity = require('../entity');
const Challenger = require('../base/challenger');
const Faction = require('../base/faction');
const StandardBullet = require('../bullet/standard/standard-bullet');
const Bomb1 = require('../bomb/1/bomb1');
const defaultImageSrc = './main/entities/player/assets/images/default.png';
const damagedImageSrc = './main/entities/player/assets/images/damaged.png';
const poweredImageSrc = './main/entities/player/assets/images/powered.png';

// The player entity.
function Player(entities) {
  Challenger.call(this);

  // The entities list.
  this.entities = entities;

  /** @override **/
  this.imageSrc = {
    default: defaultImageSrc,
    damaged: damagedImageSrc,
    powered: poweredImageSrc
  };

  /** @override **/
  this.width = Player.width;
  this.height = Player.height;

  /** @override **/

  this.x = canvas.width * 0.5 - this.width / 2;
  this.y = canvas.height - this.height * 2;

  /** @override **/
  this.type = Entity.types.PLAYER;

  /** @override **/
  this.speed = 2;

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
    shield: 1,
    bomb: 1,
    power: 1,
    life: 1
  };

  /** @override **/
  this.faction = Faction.factions.ALLIED;

  this.init();
}

Player.prototype = Object.create(Challenger.prototype);

// Size
Player.width = 60;
Player.height = 60;

/** @override **/
Player.prototype.createBullets = function() {
  this.entities.push(
    new StandardBullet({
      x: this.x + this.width / 2 - StandardBullet.width / 2,
      y: this.y - StandardBullet.height,
      attack: this.points.attack,
      faction: Faction.factions.ALLIED
    })
  );
};

/** @override **/
Player.prototype.createBombs = function() {
  this.entities.push(
    new Bomb1({
      x: this.x + this.width / 2 - Bomb1.width / 2,
      y: this.y - Bomb1.height,
      explosion: {
        width: this.width * 3,
        height: this.height * 3
      },
      attack: this.points.attack,
      faction: Faction.factions.ALLIED
    })
  );
};

/** @override **/
Player.prototype.power = function() {
  return {
    enable: () => {
      // Check if power points are available, then perform power action.
      if (this.points.power > 0) {
        // Make entity powered.
        this.status.powered = true;
        // Set invincible status to true.
        this.status.invincible = true;
        // Set the image to powered.
        this.loadImage();
        // Consume a power point.
        this.points.power = this.points.power - 1;
      }
    },
    disable: () => {
      // Make entity powered.
      this.status.powered = false;
      // Set invincible status to false.
      this.status.invincible = false;
      // Set the image to default.
      this.loadImage();
    }
  };
};

module.exports = Player;
