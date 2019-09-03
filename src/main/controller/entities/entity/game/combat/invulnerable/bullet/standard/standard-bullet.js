const Bullet = require('../bullet');

function StandardBullet(args) {
  Bullet.call(this, args);
}

StandardBullet.prototype = Object.create(Bullet.prototype);

StandardBullet.PATH = `${Bullet.PATH}/standard`;
StandardBullet.IMAGE_PATH = {
  ALLIED: [
    `${StandardBullet.PATH}/assets/images/allied/image-source-1.png`,
    `${StandardBullet.PATH}/assets/images/allied/image-source-2.png`
  ],
  ENEMY: [
    `${StandardBullet.PATH}/assets/images/enemy/image-source-1.png`,
    `${StandardBullet.PATH}/assets/images/enemy/image-source-2.png`
  ],
  NEUTRAL: [
    `${StandardBullet.PATH}/assets/images/neutral/image-source-1.png`,
    `${StandardBullet.PATH}/assets/images/neutral/image-source-2.png`
  ]
};

module.exports = StandardBullet;
