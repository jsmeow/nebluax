const properties = require('../../../properties/properties-entity');
const ProjectileEntity = require('../projectile');

function BulletEntity({
  x,
  y,
  width,
  height,
  canExplode,
  explosionAmount,
  explosionWidth,
  explosionHeight,
  faction,
  speed,
  d,
  dx,
  dy,
  type,
  status,
  points,
  timers,
  imageSources,
  creator
}) {
  ProjectileEntity.call(this, {
    x,
    y,
    width,
    height,
    canExplode,
    explosionAmount,
    explosionWidth,
    explosionHeight,
    faction,
    speed,
    d,
    dx,
    dy,
    type,
    status,
    points,
    timers,
    imageSources,
    creator
  });

  /** @override **/
  this.width = width || BulletEntity.WIDTH;
  this.height = height || BulletEntity.HEIGHT;

  /** @override **/
  this.x = x || properties.positions.ship.bow.x(this);
  this.y = y || properties.positions.ship.bow.y(this);

  /** @override **/
  this.canExplode = canExplode || false;

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.BULLET.ID
  ];
}

BulletEntity.prototype = Object.create(ProjectileEntity.prototype);

/** @override **/
BulletEntity.WIDTH = properties.sizes.PROJECTILE.BULLET.WIDTH;
BulletEntity.HEIGHT = properties.sizes.PROJECTILE.BULLET.HEIGHT;

module.exports = BulletEntity;
