const Entity = require('../../entity');
const ProjectileEntity = require('../projectile');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function BulletEntity({
  x,
  y,
  width,
  height,
  entities,
  dx,
  dy,
  faction,
  creator
}) {
  ProjectileEntity.call(this, {
    x,
    y,
    width,
    height,
    entities,
    dx,
    dy,
    faction,
    creator
  });

  /** @override **/

  this.subtype = Entity.subtypes.BULLET;
}

BulletEntity.prototype = Object.create(ProjectileEntity.prototype);

module.exports = BulletEntity;
