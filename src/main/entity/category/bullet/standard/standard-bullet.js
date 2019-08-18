const canvas = require('../../../../canvas');
const Bullet = require('../bullet');
const allied1 =
  './main/entity/category/bullet/standard/assets/images/allied/allied1.png';
const allied2 =
  './main/entity/category/bullet/standard/assets/images/allied/allied2.png';
const enemy1 =
  './main/entity/category/bullet/standard/assets/images/enemy/enemy1.png';
const enemy2 =
  './main/entity/category/bullet/standard/assets/images/enemy/enemy2.png';
const neutral1 =
  './main/entity/category/bullet/standard/assets/images/allied/allied1.png';
const neutral2 =
  './main/entity/category/bullet/standard/assets/images/allied/allied2.png';

function StandardBullet({ x, y, speed, dx, dy, degrees, creator, list }) {
  Bullet.call(this, {
    x,
    y,
    width: StandardBullet.width,
    height: StandardBullet.height,
    speed,
    dx,
    dy,
    degrees,
    creator,
    imageSources: {
      allied: [allied1, allied2],
      enemy: [enemy1, enemy2],
      neutral: [neutral1, neutral2]
    },
    list
  });

  /** @override **/
  this.type = [...this.type, 'standard'];
}

StandardBullet.prototype = Object.create(Bullet.prototype);

StandardBullet.width = canvas.pixel * 2.5;
StandardBullet.height = canvas.pixel * 3.5;

module.exports = StandardBullet;
