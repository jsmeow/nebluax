const properties = require('../../../../properties/properties-entity');
const BulletEntity = require('../bullet');
const enemy =
  './main/entity/types/projectile/bullet/homing/assets/images/enemy.png';
const allied =
  './main/entity/types/projectile/bullet/homing/assets/images/allied.png';

function HomingBulletEntity(args) {
  BulletEntity.call(this, { ...args });

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.BULLET.ID,
    properties.types.PROJECTILE.BULLET.HOMING
  ];

  /** @override **/
  this.imageSources.allied = allied;
  this.imageSources.enemy = enemy;

  this.initialize();
}

HomingBulletEntity.prototype = Object.create(BulletEntity.prototype);

/** @override **/
HomingBulletEntity.prototype.initialize = function() {
  this.dx =
    (properties.positions.canvas.quadrant(this).x *
      (this.dy * (1 + Math.abs(this.player.x - this.creator.x)))) /
    (1 - Math.abs(this.creator.y + this.player.y));

  this.dy =
    (properties.positions.canvas.quadrant(this).y *
      (this.dy * (1 + Math.abs(this.player.y + this.creator.y)))) /
    (1 - Math.abs(this.creator.x + this.player.x));
};

/** @override **/
HomingBulletEntity.prototype.updatePre = function() {
  // Perform homing if the bullet is in the same canvas quadrant as
  // The player.
  if (
    this.validateBoundary().left(this.x) ===
      this.validateBoundary().left(this.player.x) &&
    this.validateBoundary().right(this.x) ===
      this.validateBoundary().right(this.player.x)
  ) {
    this.dx =
      (properties.positions.canvas.quadrant(this).x *
        (this.d * (1 + Math.abs(this.player.x - this.creator.x)))) /
      (1 - Math.abs(this.creator.y + this.player.y));
  }
};

module.exports = HomingBulletEntity;
