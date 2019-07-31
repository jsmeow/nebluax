const Ship = require('../ship');
const StandardBullet = require('../../projectile/bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/wigeon/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/wigeon/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/wigeon/assets/images/damaged.png';

function Wigeon({ x, y, width, height, entities, dx, dy, faction }) {
  Ship.call(this, { x, y, width, height, entities, dx, dy, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc
  };

  /** @override **/
  this.width = Wigeon.width;
  this.height = Wigeon.height;

  /** @override **/
  this.points = {
    ...this.points,
    health: 1,
    attack: 1,
    value: 1,
    score: 0
  };

  this.init();
}

Wigeon.prototype = Object.create(Ship.prototype);

// Size
Wigeon.width = 60;
Wigeon.height = 60;

/** @override **/
Wigeon.prototype.createBullets = function() {
  this.entities.push(new StandardBullet({ creator: this }));
};

module.exports = Wigeon;
