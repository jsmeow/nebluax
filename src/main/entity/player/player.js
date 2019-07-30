const canvas = require('../../canvas');
const Entity = require('../entity');
const AggressiveEntity = require('../base/aggressive');
const FactionedEntity = require('../base/factioned');
const StandardBullet = require('../bullet/standard/standard-bullet');
const Bomb1 = require('../bomb/1/bomb1');
const defaultImageSrc = './main/entity/player/assets/images/default.png';
const damagedImageSrc = './main/entity/player/assets/images/damaged.png';
const shieldedImageSrc = './main/entity/player/assets/images/shielded.png';

// The player entity.
function Player(entities) {
  AggressiveEntity.call(this);

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
    health: 3,
    attack: 1,
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
Player.prototype.shield = function() {
  return {
    enable: () => {
      // Check if power shield are available, then perform shield action.
      // Check if not shielded already.
      if (this.points.shield > 0 && !this.status.shielded) {
        // Make entity shielded.
        // Set invincible status to true.
        this.status.shielded = true;
        this.status.invincible = true;

        // Adjust image size.
        this.width = this.width + 27;
        this.height = this.height + 27;

        // Adjust position.
        this.x = this.x - 27 * 0.5;
        this.y = this.y - 27 * 0.5;

        // Set the image to shielded.
        // Consume a power point if player entity.
        this.loadImage();
        this.points.shield = this.points.shield - 1;
      }
    },
    disable: () => {
      // Make entity shielded.
      // Set invincible status to false.
      this.status.shielded = false;
      this.status.invincible = false;

      // Adjust image size.
      this.width = this.width - 27;
      this.height = this.height - 27;

      // Adjust position.
      this.x = this.x + 27 * 0.5;
      this.y = this.y + 27 * 0.5;

      // Set the image to default.
      this.loadImage();
    }
  };
};

/** @override **/
Player.prototype.createBullets = function() {
  this.entities.push(
    new StandardBullet({
      creator: this,
      x: this.x + this.width * 0.5 - StandardBullet.width * 0.5,
      y: this.y - StandardBullet.height,
      attack: this.points.attack,
      faction: FactionedEntity.factions.ALLIED
    })
  );
};

/** @override **/
Player.prototype.createBombs = function() {
  if (this.points.bomb > 0) {
    this.entities.push(
      new Bomb1({
        creator: this,
        x: this.x + this.width * 0.5 - Bomb1.width * 0.5,
        y: this.y - Bomb1.height,
        explosion: {
          width: this.width * 3,
          height: this.height * 3
        },
        attack: this.points.attack,
        faction: FactionedEntity.factions.ALLIED
      })
    );
    this.points.bomb = this.points.bomb - 1;
  }
};

module.exports = Player;
