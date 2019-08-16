const properties = require('../../../../properties/properties-entity');
const BombEntity = require('../bomb');
const enemyImageSrc =
  './main/entity/types/projectile/bomb/standard/assets/images/enemy.png';
const alliedImageSrc =
  './main/entity/types/projectile/bomb/standard/assets/images/allied.png';

function StandardBombEntity(args) {
  BombEntity.call(this, { ...args });

  /** @override **/
  this.imageSources = {
    enemy: enemyImageSrc,
    allied: alliedImageSrc
  };

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.BOMB.ID,
    properties.types.PROJECTILE.BOMB.STANDARD
  ];
}

StandardBombEntity.prototype = Object.create(BombEntity.prototype);

module.exports = StandardBombEntity;
