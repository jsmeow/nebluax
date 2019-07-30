const canvas = require('../../../canvas');
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
  this.points = {
    ...this.points,
    health: 2,
    attack: 1,
    score: 5
  };

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
      creator: this,
      x: this.x + this.width / 2 - StandardBullet.width / 2,
      y: this.y + this.height + StandardBullet.height,
      attack: this.points.attack,
      faction: Faction.factions.ENEMY
    })
  );
};

/** @override **/
Narrowbill.prototype.prowling = function(x, y) {
  /* This.coordinates = [
    { x: x + 100, y: y + 50 },
    { x: x + 50, y: y + 100 },
    { x, y }
  ];*/
};

module.exports = Narrowbill;
