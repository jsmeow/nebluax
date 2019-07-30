const Bomb = require('../bomb');
const enemyImageSrc = './main/entity/bomb/1/assets/images/default.png';
const alliedImageSrc = './main/entity/bomb/1/assets/images/default.png';

function Bomb1({ creator, x, y, explosion, attack, faction }) {
  Bomb.call(this, { creator, x, y, explosion, attack, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.width = Bomb1.width;
  this.height = Bomb1.height;

  /** @override **/
  this.points.attack = attack * 3;

  this.init();
}

Bomb1.prototype = Object.create(Bomb.prototype);

// Size
Bomb1.width = 30;
Bomb1.height = 30;

module.exports = Bomb1;
