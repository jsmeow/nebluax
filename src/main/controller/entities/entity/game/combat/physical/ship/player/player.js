const { window } = require('../../../../../../../../options');
const Ship = require('../ship');
const timers = require('../../../../../../timers/entity-timers');
const enums = require('../../../../../../../../enums/enums');
const emojis = require('emoji.json/emoji-compact.json');

function Player(args) {
  Ship.call(
    this,
    Object.assign(args, {
      x: Player.X,
      y: Player.Y,
      width: Player.WIDTH,
      height: Player.HEIGHT,
      speed: Player.SPEED,
      imagePath: Player.IMAGE_PATH.BASIC,
      imagePathDamaged: Player.IMAGE_PATH.DAMAGED,
      faction: Player.FACTION,
      health: Player.HEALTH,
      attack: Player.ATTACK
    })
  );

  // The moving direction heading flags whether the player entity is already
  // moving in a specific vector direction
  // This is necessary to avoid a delay during a keydown event.
  this.direction = {
    left: false,
    right: false,
    up: false,
    down: false
  };

  // Add the bullet timer to the list of entity timers
  this.timers.bullet = timers.game.bullet({
    entity: this,
    spawn: () =>
      this.factory.game.combat.invulnerable.bullet.standardBullet.allied({
        x: (this.x + this.width * 0.5) / window.scale,
        y: this.y / window.scale,
        dy: -1,
        attack: this.attack,
        creator: this
      })
  });
}

Player.prototype = Object.create(Ship.prototype);

// Create/fire a bomb
Player.prototype.fireBomb = function() {
  this.factory.game.combat.physical.explosive.bomb.standardBomb.allied({
    x: (this.x + this.width * 0.5) / window.scale,
    y: this.y / window.scale,
    dy: -1,
    creator: this
  });
};

Player.PATH = `${Ship.PATH}/player`;
Player.EMOJI = emojis[2960];
Player.X = window.width * 0.5;
Player.Y = window.height * 0.75;
Player.WIDTH = 17;
Player.HEIGHT = 17;
Player.SPEED = 200;
Player.IMAGE_PATH = {
  BASIC: [
    `${Player.PATH}/assets/images/basic/image-source-1.png`,
    `${Player.PATH}/assets/images/basic/image-source-2.png`,
    `${Player.PATH}/assets/images/basic/image-source-3.png`,
    `${Player.PATH}/assets/images/basic/image-source-4.png`
  ],
  DAMAGED: `${Player.PATH}/assets/images/damaged/image-source.png`
};
Player.FACTION = enums.entity.faction.ALLIED;
Player.HEALTH = 3;
Player.ATTACK = 1;

module.exports = Player;
