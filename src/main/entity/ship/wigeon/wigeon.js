const Ship = require('../ship');
const FactionedEntity = require('../../base/factioned');
const StandardBullet = require('../../projectile/bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/wigeon/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/wigeon/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/wigeon/assets/images/damaged.png';

function Wigeon({ x, y, width, height, faction, player }) {
  Ship.call(this, { x, y, width, height, faction });

  // The player entity.
  this.player = player;

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
  this.status.firing = true;

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
Wigeon.prototype.createBullets = function(entities) {
  entities.push(
    new StandardBullet({
      creator: this,
      x: this.position().bow.x - StandardBullet.width / 2,
      y: this.position().bow.y + StandardBullet.height,
      attack: this.points.attack,
      faction: FactionedEntity.factions.ENEMY
    })
  );
};

module.exports = Wigeon;
