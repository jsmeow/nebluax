const Ship = require('../ship');
const StandardBullet = require('../../projectile/bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/bowerbird/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/bowerbird/assets/images/allied.png';
const damagedImageSrc =
  './main/entity/ship/bowerbird/assets/images/damaged.png';

function Bowerbird({ x, y, width, height, entities, dx, dy, faction }) {
  Ship.call(this, { x, y, width, height, entities, dx, dy, faction });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc
  };

  /** @override **/
  this.width = Bowerbird.width;
  this.height = Bowerbird.height;

  /** @override **/
  this.points = {
    ...this.points,
    health: 2,
    attack: 1,
    value: 1
  };

  this.init();
}

Bowerbird.prototype = Object.create(Ship.prototype);

// Size
Bowerbird.width = 60;
Bowerbird.height = 60;

/** @override **/
Bowerbird.prototype.createBullets = function() {
  this.entities.push(
    new StandardBullet({ entities: this.entities, creator: this })
  );
};

/** @override **/
Bowerbird.prototype.prowl = function() {
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

module.exports = Bowerbird;
