const { window } = require('../../../../../../../options');
const Ship = require('../ship');
const timers = require('../../../../../timers/entity-timers');
const enums = require('../../../../../../../enums/enums');
const emojis = require('emoji.json/emoji-compact.json');

function Player(args) {
  Ship.call(
    this,
    Object.assign(args, {
      x: Player.X,
      y: Player.Y,
      width: Player.WIDTH.BASIC,
      height: Player.HEIGHT.BASIC,
      rotation: 30,
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
    fireBullet: this.fireBullet.bind(this)
  });
}

Player.prototype = Object.create(Ship.prototype);

// Create a bullet
Player.prototype.fireBullet = function() {
  this.factory.game.combat.bullet.basic.allied({
    x: this.bow.x / window.scale,
    y: this.bow.y / window.scale,
    dy: -1,
    parent: this
  });
};

// Create a bomb
Player.prototype.fireBomb = function() {
  this.factory.game.combat.explosive.bomb.allied({
    x: this.bow.x / window.scale,
    y: this.bow.y / window.scale,
    dy: -1,
    parent: this
  });
};

// Create a mine
Player.prototype.fireMine = function() {
  this.factory.game.combat.explosive.mine.allied({
    x: this.bow.x / window.scale,
    y: this.bow.y / window.scale,
    dy: -1,
    parent: this
  });
};

// Create a shield
Player.prototype.shield = function() {
  this.factory.game.combat.shield({
    width: Player.WIDTH.SHIELD,
    height: Player.HEIGHT.SHIELD,
    imagePath: Player.IMAGE_PATH.SHIELD,
    parent: this
  });
};

Player.PATH = `${Ship.PATH}/player`;
Player.EMOJI = emojis[2960];
Player.X = window.width * 0.5;
Player.Y = window.height * 0.75;
Player.WIDTH = {
  BASIC: 17,
  SHIELD: 23
};
Player.HEIGHT = {
  BASIC: 17,
  SHIELD: 23
};
Player.SPEED = 200;
Player.IMAGE_PATH = {
  BASIC: [
    `${Player.PATH}/assets/images/basic/image-source-1.png`,
    `${Player.PATH}/assets/images/basic/image-source-2.png`,
    `${Player.PATH}/assets/images/basic/image-source-3.png`,
    `${Player.PATH}/assets/images/basic/image-source-4.png`
  ],
  DAMAGED: `${Player.PATH}/assets/images/damaged/image-source.png`,
  SHIELD: [
    `${Player.PATH}/assets/images/shield/image-source-1.png`,
    `${Player.PATH}/assets/images/shield/image-source-2.png`,
    `${Player.PATH}/assets/images/shield/image-source-3.png`
  ]
};
Player.FACTION = enums.entity.faction.ALLIED;
Player.HEALTH = 3;
Player.ATTACK = 1;

module.exports = Player;
