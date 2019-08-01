const types = require('../../../entity/entity-types');
const Ship = require('../ship');
const Wigeon = require('../wigeon/wigeon');
const StandardBullet = require('../../projectile/bullet/standard/standard-bullet');
const enemyImageSrc = './main/entity/ship/mallard/assets/images/enemy.png';
const alliedImageSrc = './main/entity/ship/mallard/assets/images/allied.png';
const damagedImageSrc = './main/entity/ship/mallard/assets/images/damaged.png';
const shieldedImageSrc =
  './main/entity/ship/mallard/assets/images/shielded.png';

function Mallard({ x, y, width, height, entities, faction, dx, dy }) {
  Ship.call(this, { x, y, width, height, entities, faction, dx, dy });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc,
    damaged: damagedImageSrc,
    shielded: shieldedImageSrc
  };

  /** @override **/
  this.width = Mallard.width;
  this.height = Mallard.height;

  /** @override **/
  this.points = {
    ...this.points,
    health: 3,
    attack: 1,
    value: 1,
    score: 0
  };

  // The accompanied mallard entity wigeon entities.
  this.wigeons = [];

  this.init();
}

Mallard.prototype = Object.create(Ship.prototype);

// Size
Mallard.width = 60;
Mallard.height = 60;

/** @override **/
Mallard.prototype.init = function() {
  this.loadImage();

  // Create wigeons.
  this.wigeons = [
    new Wigeon({
      x: this.x - 114,
      y: this.y,
      faction: types.faction.ENEMY,
      player: this.player,
      entities: this.entities
    }),
    new Wigeon({
      x: this.x + this.width + 114,
      y: this.y,
      faction: types.faction.ENEMY,
      player: this.player,
      entities: this.entities
    })
  ];

  // Create two wigeon ship entities.
  this.entities.push(this.wigeons[0]);
  this.entities.push(this.wigeons[1]);

  // Adjust image size.
  this.width = this.width + 14;
  this.height = this.height + 14;

  // Adjust position.
  this.x = this.x - 14 * 0.5;
  this.y = this.y - 14 * 0.5;

  // Make shielded.
  this.shield().enable();
};

/** @override **/
Mallard.prototype.createBullets = function() {
  this.entities.push(new StandardBullet({ creator: this }));
};

/** @override **/
Mallard.prototype.preUpdate = function() {
  // Wigeons mirror the mallard movement.
  this.wigeons[0].x = this.x - 114;
  this.wigeons[0].y = this.y;
  this.wigeons[1].x = this.x + 134;
  this.wigeons[1].y = this.y;

  // If wigeons are dead, this mallard entity is not invincible.
  if (
    this.status.shielded &&
    !this.wigeons[0].status.alive &&
    !this.wigeons[1].status.alive
  ) {
    // Make unshielded.
    this.shield().disable();

    // Adjust image size.
    this.width = this.width - 14;
    this.height = this.height - 14;

    // Adjust position.
    this.x = this.x + 14 * 0.5;
    this.y = this.y + 14 * 0.5;
  }
};

module.exports = Mallard;
