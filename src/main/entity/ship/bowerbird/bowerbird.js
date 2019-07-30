const Ship = require('../ship');
const FactionedEntity = require('../../base/factioned');
const StandardBullet = require('../../bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/bowerbird/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/bowerbird/assets/images/allied.png';
const damagedImageSrc =
  './main/entity/ship/bowerbird/assets/images/damaged.png';

// An entity with the ability to perform roaming.
function Bowerbird({ x, y, width, height, faction, player }) {
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
  this.width = Bowerbird.width;
  this.height = Bowerbird.height;

  /** @override **/
  this.status.firing = true;

  /** @override **/
  this.points = {
    ...this.points,
    health: 2,
    attack: 1,
    score: 1
  };

  this.init();
}

Bowerbird.prototype = Object.create(Ship.prototype);

// Size
Bowerbird.width = 60;
Bowerbird.height = 60;

/** @override **/
Bowerbird.prototype.createBullets = function(entities) {
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
