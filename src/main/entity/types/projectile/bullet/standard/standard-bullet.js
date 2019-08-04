const properties = require('../../../../properties/properties-entity');
const BulletEntity = require('../bullet');
const allied =
  './main/entity/types/projectile/bullet/standard/assets/images/allied.png';
const enemy =
  './main/entity/types/projectile/bullet/standard/assets/images/enemy.png';

function StandardBulletEntity(args) {
  BulletEntity.call(this, { ...args });

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.BULLET.ID,
    properties.types.PROJECTILE.BULLET.STANDARD
  ];

  /** @override **/
  this.imageSources.allied = allied;
  this.imageSources.enemy = enemy;
}

StandardBulletEntity.prototype = Object.create(BulletEntity.prototype);

module.exports = StandardBulletEntity;
