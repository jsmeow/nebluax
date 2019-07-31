const Ship = require('../ship');
const FactionedEntity = require('../../base/factioned');
const StandardBullet = require('../../projectile/bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/warbler/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/warbler/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/warbler/assets/images/damaged.png';

function Warbler({ x, y, width, height, faction, player }) {
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
  this.width = Warbler.width;
  this.height = Warbler.height;

  /** @override **/
  this.status.firing = true;

  /** @override **/
  this.points = {
    ...this.points,
    health: 2,
    attack: 1,
    value: 1
  };

  this.init();
}

Warbler.prototype = Object.create(Ship.prototype);

// Size
Warbler.width = 60;
Warbler.height = 60;

/** @override **/
Warbler.prototype.createBullets = function(entities) {
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
Warbler.prototype.prowl = function() {
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

module.exports = Warbler;
