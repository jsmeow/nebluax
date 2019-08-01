const BombEntity = require('../bomb');
const enemyImageSrc = './main/entity/projectile/bomb/1/assets/images/enemy.png';
const alliedImageSrc =
  './main/entity/projectile/bomb/1/assets/images/allied.png';

function Bomb1Entity({
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
  BombEntity.call(this, {
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
  this.width = Bomb1Entity.width;
  this.height = Bomb1Entity.height;

  this.init();
}

Bomb1Entity.prototype = Object.create(BombEntity.prototype);

// Size
Bomb1Entity.width = 6.667 * 5;
Bomb1Entity.height = 6.667 * 5;

module.exports = Bomb1Entity;
