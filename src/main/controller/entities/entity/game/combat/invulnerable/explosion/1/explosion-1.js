const Explosion = require('../explosion');

function Explosion1(args) {
  Explosion.call(
    this,
    Object.assign(args, {
      width: args.width || Explosion1.WIDTH,
      height: args.height || Explosion1.HEIGHT,
      imagePath: Explosion1.IMAGE_PATH
    })
  );
}

Explosion1.prototype = Object.create(Explosion.prototype);

Explosion1.PATH = `${Explosion.PATH}/1`;
Explosion1.WIDTH = 17;
Explosion1.HEIGHT = 17;
Explosion1.IMAGE_PATH = [
  `${Explosion1.PATH}/assets/images/image-source-1.png`,
  `${Explosion1.PATH}/assets/images/image-source-2.png`,
  `${Explosion1.PATH}/assets/images/image-source-3.png`,
  `${Explosion1.PATH}/assets/images/image-source-4.png`,
  `${Explosion1.PATH}/assets/images/image-source-5.png`,
  `${Explosion1.PATH}/assets/images/image-source-6.png`,
  `${Explosion1.PATH}/assets/images/image-source-7.png`
];

module.exports = Explosion1;
