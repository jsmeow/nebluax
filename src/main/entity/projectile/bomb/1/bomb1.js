const Bomb = require('../bomb');
const enemyImageSrc =
  './main/entity/projectile/bomb/1/assets/images/default.png';
const alliedImageSrc =
  './main/entity/projectile/bomb/1/assets/images/default.png';

function Bomb1({
  x,
  y,
  width,
  height,
  entities,
  faction,
  creator,
  attack,
  explosion
}) {
  Bomb.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    creator,
    attack,
    explosion
  });

  /** @override **/

  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.width = Bomb1.width;
  this.height = Bomb1.height;

  this.init();
}

Bomb1.prototype = Object.create(Bomb.prototype);

// Size
Bomb1.width = 30;
Bomb1.height = 30;

module.exports = Bomb1;
