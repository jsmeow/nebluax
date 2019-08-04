const properties = require('../../../properties/properties-entity');
const ProjectileEntity = require('../projectile');

function BombEntity(args) {
  ProjectileEntity.call(this, { ...args });

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.BOMB.ID
  ];
}

BombEntity.prototype = Object.create(ProjectileEntity.prototype);

module.exports = BombEntity;
