const Bullet = require('../bullet');

function BasicBullet(args) {
  Bullet.call(this, args);
}

BasicBullet.prototype = Object.create(Bullet.prototype);

BasicBullet.PATH = `${Bullet.PATH}/basic`;
BasicBullet.IMAGE_PATH = {
  ALLIED: [
    `${BasicBullet.PATH}/assets/images/allied/image-source-1.png`,
    `${BasicBullet.PATH}/assets/images/allied/image-source-2.png`
  ],
  ENEMY: [
    `${BasicBullet.PATH}/assets/images/enemy/image-source-1.png`,
    `${BasicBullet.PATH}/assets/images/enemy/image-source-2.png`
  ],
  NEUTRAL: [
    `${BasicBullet.PATH}/assets/images/neutral/image-source-1.png`,
    `${BasicBullet.PATH}/assets/images/neutral/image-source-2.png`
  ]
};

module.exports = BasicBullet;
