const BulletEntity = require('../bullet');
const enemyImageSrc =
  './main/entity/projectile/bullet/standard/assets/images/enemy.png';
const alliedImageSrc =
  './main/entity/projectile/bullet/standard/assets/images/allied.png';

function StandardBulletEntity({
  x,
  y,
  width,
  height,
  entities,
  faction,
  dx,
  dy,
  factory,
  creator
}) {
  BulletEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    dx,
    dy,
    factory,
    creator
  });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.width = StandardBulletEntity.width;
  this.height = StandardBulletEntity.height;

  this.init();
}

StandardBulletEntity.prototype = Object.create(BulletEntity.prototype);

// Size
StandardBulletEntity.width = 6.667;
StandardBulletEntity.height = 6.667;

module.exports = StandardBulletEntity;
