const BulletEntity = require('../bullet');
const enemyImageSrc =
  './main/entity/projectile/bullet/homing/assets/images/enemy.png';
const alliedImageSrc =
  './main/entity/projectile/bullet/homing/assets/images/allied.png';

function HomingBulletEntity({
  x,
  y,
  width,
  height,
  entities,
  faction,
  dx,
  dy,
  factory,
  creator
}) {
  BulletEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    dx,
    dy,
    factory,
    creator
  });

  /** @override **/
  this.imageSrc = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.width = HomingBulletEntity.width;
  this.height = HomingBulletEntity.height;

  this.dx =
    (this.getQuadrant().x *
      (HomingBulletEntity.d * (1 + Math.abs(this.player.x - this.creator.x)))) /
    (1 - Math.abs(this.creator.y + this.player.y));

  this.dy =
    (this.getQuadrant().y *
      (HomingBulletEntity.d * (1 + Math.abs(this.player.y + this.creator.y)))) /
    (1 - Math.abs(this.creator.x + this.player.x));

  /* This.dx =
    (this.getQuadrant().x *
      (HomingBulletEntity.d * (1 + Math.abs(this.player.x - this.creator.x)))) /
    (1 - Math.abs(this.creator.y + this.player.y));

  this.dy =
    (this.getQuadrant().y *
      (HomingBulletEntity.d * (1 + Math.abs(this.player.y + this.creator.y)))) /
    (1 - Math.abs(this.creator.x + this.player.x));*/

  this.init();
}

HomingBulletEntity.prototype = Object.create(BulletEntity.prototype);

// Size
HomingBulletEntity.width = 6.667;
HomingBulletEntity.height = 6.667;

// Vector magnitude.
HomingBulletEntity.d = 4;

// Get the cartesian plane quadrant the homing target is in, and the
// Corresponding vector direction to move in.
HomingBulletEntity.prototype.getQuadrant = function() {
  return {
    x: this.assertCollision().point.right(this.player.x) ? 1 : -1,
    y: this.assertCollision().point.down(this.player.y) ? 1 : -1
  };
};

/** @override **/
HomingBulletEntity.prototype.preUpdate = function() {
  if (this.assertCollision().boundary.all) {
    this.status.alive = false;
  }

  if (
    this.assertCollision().point.left(this.x) ===
      this.assertCollision().point.left(this.player.x) &&
    this.assertCollision().point.right(this.x) ===
      this.assertCollision().point.right(this.player.x)
  ) {
    this.dx =
      (this.getQuadrant().x *
        (HomingBulletEntity.d *
          (1 + Math.abs(this.player.x - this.creator.x)))) /
      (1 - Math.abs(this.creator.y + this.player.y));
  }
};

module.exports = HomingBulletEntity;
