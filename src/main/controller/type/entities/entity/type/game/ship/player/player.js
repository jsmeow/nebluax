const Ship = require('../ship');
const enums = require('../../../../../../../enum/enums');
const emojis = require('emoji.json/emoji-compact.json');

function Player(args) {
  Ship.call(
    this,
    Object.assign(args, {
      x: args.x || 0,
      y: args.y || 0,
      width: Player.WIDTH,
      height: Player.HEIGHT,
      speed: args.speed || 200,
      imgSrc: Player.IMG_SRC,
      attack: 1,
      faction: enums.ENTITIES.FACTION.ALLIED
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
}

Player.prototype = Object.create(Ship.prototype);

Player.PATH = `${Ship.PATH}/player`;
Player.EMOJI = emojis[2960];
Player.WIDTH = 17;
Player.HEIGHT = 17;
Player.IMG_SRC = [
  `${Player.PATH}/assets/images/basic/image-source-1.png`,
  `${Player.PATH}/assets/images/basic/image-source-2.png`,
  `${Player.PATH}/assets/images/basic/image-source-3.png`,
  `${Player.PATH}/assets/images/basic/image-source-4.png`
];

module.exports = Player;
