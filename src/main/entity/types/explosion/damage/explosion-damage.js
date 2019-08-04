const properties = require('../../../properties/properties-entity');
const ExplosionEntity = require('../explosion');
const basic1 = './main/entity/types/explosion/damage/assets/images/basic1.png';
const basic2 = './main/entity/types/explosion/damage/assets/images/basic2.png';
const basic3 = './main/entity/types/explosion/damage/assets/images/basic3.png';
const basic4 = './main/entity/types/explosion/damage/assets/images/basic4.png';

function ExplosionDamageEntity(args) {
  ExplosionEntity.call(this, { ...args });

  /** @override **/
  this.type = [
    properties.types.EFFECT.ID,
    properties.types.EFFECT.EXPLOSION.ID,
    properties.types.EFFECT.EXPLOSION.DAMAGE
  ];

  /** @override **/
  this.imageSources.explosions = [basic1, basic2, basic3, basic4];
}

ExplosionDamageEntity.prototype = Object.create(ExplosionEntity.prototype);

module.exports = ExplosionDamageEntity;
