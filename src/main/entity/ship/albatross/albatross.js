const Ship = require('../ship');
const StandardBullet = require('../../projectile/bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/albatross/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/albatross/assets/images/allied.png';
const damagedImageSrc =
  './main/entity/ship/albatross/assets/images/damaged.png';

function Albatross({ x, y, width, height, entities, dx, dy, faction }) {
  Ship.call(this, { x, y, width, height, entities, dx, dy, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc
  };

  /** @override **/
  this.width = Albatross.width;
  this.height = Albatross.height;

  /** @override **/
  this.points = {
    ...this.points,
    health: 2,
    attack: 1,
    value: 1
  };

  this.init();
}

Albatross.prototype = Object.create(Ship.prototype);

// Size
Albatross.width = 60;
Albatross.height = 60;

/** @override **/
Albatross.prototype.createBullets = function() {
  this.entities.push(new StandardBullet({ creator: this }));
};

/** @override **/
Albatross.prototype.prowl = function() {
  // Set prowling flag.
  this.status.prowling = true;

  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  return this.point({ x: this.player.x, y: y + 150 })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x: this.player.x, y: this.y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x: this.player.x, y: this.y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.point({ x, y });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      // Set prowling flag.
      this.status.prowling = false;
      return Promise.resolve();
    });
};

module.exports = Albatross;
