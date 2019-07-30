const Bullet = require('../bullet');
const enemyImageSrc = './main/entity/bullet/standard/assets/images/enemy.png';
const alliedImageSrc =
  './main/entity/bullet/standard/assets/images/allied.png';

function StandardBullet({ creator, x, y, width, height, attack, faction }) {
  Bullet.call(this, { creator, x, y, width, height, attack, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.width = StandardBullet.width;
  this.height = StandardBullet.height;

  this.init();
}

StandardBullet.prototype = Object.create(Bullet.prototype);

// Size
StandardBullet.width = 6.667;
StandardBullet.height = 6.667;

module.exports = StandardBullet;
