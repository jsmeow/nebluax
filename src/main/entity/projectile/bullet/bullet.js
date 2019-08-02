const types = require('../../entity-types');
const ProjectileEntity = require('../projectile');

function BulletEntity({
  x,
  y,
  width,
  height,
  entities,
  faction,
  d,
  dx,
  dy,
  factory,
  creator
}) {
  ProjectileEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    d,
    dx,
    dy,
    factory,
    creator
  });

  /** @override **/
  this.width = BulletEntity.width;
  this.height = BulletEntity.height;

  /** @override **/
  this.subtype = types.subtype.projectile.BULLET;
}

BulletEntity.prototype = Object.create(ProjectileEntity.prototype);

// Size
BulletEntity.width = 6.667;
BulletEntity.height = 6.667;

module.exports = BulletEntity;
