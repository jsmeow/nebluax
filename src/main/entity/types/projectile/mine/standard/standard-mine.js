const properties = require('../../../../properties/properties-entity');
const MineEntity = require('../mine');
const enemy =
  './main/entity/types/projectile/mine/standard/assets/images/enemy.png';
const allied =
  './main/entity/types/projectile/mine/standard/assets/images/allied.png';

function StandardMineEntity(args) {
  MineEntity.call(this, { ...args });

  /** @override **/
  this.imageSources = {
    enemy,
    allied
  };

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.MINE.ID,
    properties.types.PROJECTILE.MINE.STANDARD
  ];
}

StandardMineEntity.prototype = Object.create(MineEntity.prototype);

module.exports = StandardMineEntity;
