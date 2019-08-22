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

function StandardBullet({ x, y, speed, dx, dy, degrees, creator, entities }) {
  Bullet.call(this, {
    x,
    y,
    width: StandardBullet.width,
    height: StandardBullet.height,
    speed,
    dx,
    dy,
    imgSrc: [[allied1, allied2], [enemy1, enemy2], [neutral1, neutral2]],
    degrees,
    creator,
    entities
  });

  /** @override **/
  this.props.type = [...this.props.type, 'standard'];
}

StandardBullet.prototype = Object.create(Bullet.prototype);

StandardBullet.width = canvas.res * 2.5;
StandardBullet.height = canvas.res * 3.5;

module.exports = StandardBullet;
