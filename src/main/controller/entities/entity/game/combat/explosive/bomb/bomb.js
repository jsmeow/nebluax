const Explosive = require('../explosive');
const emojis = require('emoji.json/emoji-compact.json');

function Bomb(args) {
  Explosive.call(
    this,
    Object.assign(args, {
      width: args.width || Bomb.WIDTH,
      height: args.height || Bomb.HEIGHT,
      speed: args.speed || Bomb.SPEED,
      imagePath: Bomb.IMAGE_PATH
    })
  );
}

Bomb.prototype = Object.create(Explosive.prototype);

Bomb.PATH = `${Explosive.PATH}/bomb`;
Bomb.EMOJI = emojis[148];
Bomb.WIDTH = 7;
Bomb.HEIGHT = 7;
Bomb.SPEED = 150;
Bomb.IMAGE_PATH = [
  `${Bomb.PATH}/assets/images/image-source-1.png`,
  `${Bomb.PATH}/assets/images/image-source-2.png`,
  `${Bomb.PATH}/assets/images/image-source-3.png`,
  `${Bomb.PATH}/assets/images/image-source-4.png`,
  `${Bomb.PATH}/assets/images/image-source-5.png`,
  `${Bomb.PATH}/assets/images/image-source-6.png`,
  `${Bomb.PATH}/assets/images/image-source-7.png`,
  `${Bomb.PATH}/assets/images/image-source-8.png`,
  `${Bomb.PATH}/assets/images/image-source-9.png`,
  `${Bomb.PATH}/assets/images/image-source-10.png`
];

module.exports = Bomb;
