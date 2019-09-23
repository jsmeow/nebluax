const Explosive = require('../explosive');
const timers = require('../../../../../timers/entity-timers');
const emojis = require('emoji.json/emoji-compact.json');

function Mine(args) {
  Explosive.call(
    this,
    Object.assign(args, {
      width: args.width || Mine.WIDTH,
      height: args.height || Mine.HEIGHT,
      speed: args.speed || Mine.SPEED,
      imagePath: Mine.IMAGE_PATH
    })
  );

  // Add the acceleration timer to the timer list
  this.timers.acceleration = timers.game.acceleration({
    acceleration: Mine.ACCELERATION,
    stopSpeed: Mine.STOP_SPEED
  });
}

Mine.prototype = Object.create(Explosive.prototype);

Mine.PATH = `${Explosive.PATH}/mine`;
Mine.EMOJI = emojis[148];
Mine.WIDTH = 7;
Mine.HEIGHT = 7;
Mine.SPEED = 500;
Mine.IMAGE_PATH = [
  `${Mine.PATH}/assets/images/image-source-1.png`,
  `${Mine.PATH}/assets/images/image-source-2.png`,
  `${Mine.PATH}/assets/images/image-source-3.png`,
  `${Mine.PATH}/assets/images/image-source-4.png`,
  `${Mine.PATH}/assets/images/image-source-5.png`,
  `${Mine.PATH}/assets/images/image-source-6.png`,
  `${Mine.PATH}/assets/images/image-source-7.png`,
  `${Mine.PATH}/assets/images/image-source-8.png`,
  `${Mine.PATH}/assets/images/image-source-9.png`,
  `${Mine.PATH}/assets/images/image-source-10.png`
];
Mine.ACCELERATION = -10;
Mine.STOP_SPEED = 0;

module.exports = Mine;
