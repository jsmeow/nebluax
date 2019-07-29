const Ship = require('../ship');
const Faction = require('../../base/faction');
const StandardBullet = require('../../bullet/standard/standard-bullet');
const enemyImageSrc = './main/entities/ship/narrowbill/assets/images/enemy.png';
const alliedImageSrc =
  './main/entities/ship/narrowbill/assets/images/allied.png';
const damagedImageSrc =
  './main/entities/ship/narrowbill/assets/images/damaged.png';

// An entity with the ability to perform roaming.
function Narrowbill({ x, y, width, height, faction }) {
  Ship.call(this, { x, y, width, height, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc
  };

  /** @override **/
  this.width = Narrowbill.width;
  this.height = Narrowbill.height;

  /** @override **/
  this.status.firing = true;

  /** @override **/
  this.points.health = 3;
  this.points.attack = 1;

  this.init();
}

Narrowbill.prototype = Object.create(Ship.prototype);

// Size
Narrowbill.width = 60;
Narrowbill.height = 60;

/** @override **/

Narrowbill.prototype.createBullets = function(entities) {
  entities.push(
    new StandardBullet({
      x: this.x + this.width / 2 - StandardBullet.width / 2,
      y: this.y + this.height + StandardBullet.height,
      attack: this.points.attack,
      faction: Faction.factions.ENEMY
    })
  );
};

module.exports = Narrowbill;
