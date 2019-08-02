const MineEntity = require('../mine');
const enemyImageSrc = './main/entity/projectile/mine/1/assets/images/enemy.png';
const alliedImageSrc =
  './main/entity/projectile/mine/1/assets/images/allied.png';

function Mine1Entity({
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
  MineEntity.call(this, {
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
  this.width = Mine1Entity.width;
  this.height = Mine1Entity.height;

  this.init();
}

Mine1Entity.prototype = Object.create(MineEntity.prototype);

// Size
Mine1Entity.width = 6.667 * 5;
Mine1Entity.height = 6.667 * 5;

module.exports = Mine1Entity;
