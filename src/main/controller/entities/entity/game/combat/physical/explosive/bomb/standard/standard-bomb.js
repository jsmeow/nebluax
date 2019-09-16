const Bomb = require('../bomb');
const Explosion1 = require('../../../../invulnerable/explosion/1/explosion-1');

function StandardBomb(args) {
  Bomb.call(
    this,
    Object.assign(args, {
      speed: StandardBomb.SPEED,
      imagePath: StandardBomb.IMAGE_PATH,
      explosion: {
        width: StandardBomb.EXPLOSION_WIDTH,
        height: StandardBomb.EXPLOSION_HEIGHT,
        attack: StandardBomb.EXPLOSION_ATTACK
      }
    })
  );
}

StandardBomb.prototype = Object.create(Bomb.prototype);

StandardBomb.PATH = `${Bomb.PATH}/standard`;
StandardBomb.SPEED = 150;
StandardBomb.IMAGE_PATH = [
  `${StandardBomb.PATH}/assets/images/image-source-1.png`,
  `${StandardBomb.PATH}/assets/images/image-source-2.png`,
  `${StandardBomb.PATH}/assets/images/image-source-3.png`,
  `${StandardBomb.PATH}/assets/images/image-source-4.png`,
  `${StandardBomb.PATH}/assets/images/image-source-5.png`,
  `${StandardBomb.PATH}/assets/images/image-source-6.png`,
  `${StandardBomb.PATH}/assets/images/image-source-7.png`,
  `${StandardBomb.PATH}/assets/images/image-source-8.png`,
  `${StandardBomb.PATH}/assets/images/image-source-9.png`,
  `${StandardBomb.PATH}/assets/images/image-source-10.png`
];
StandardBomb.EXPLOSION_WIDTH = Explosion1.WIDTH * 3;
StandardBomb.EXPLOSION_HEIGHT = Explosion1.HEIGHT * 3;
StandardBomb.EXPLOSION_ATTACK = 3;

module.exports = StandardBomb;
