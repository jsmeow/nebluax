const types = require('../../entity-types');
const ExplosionEntity = require('../explosion');
const default1 = './main/entity/explosion/damage/assets/images/default1.png';
const default2 = './main/entity/explosion/damage/assets/images/default2.png';
const default3 = './main/entity/explosion/damage/assets/images/default3.png';
const default4 = './main/entity/explosion/damage/assets/images/default4.png';

function ExplosionDamageEntity({
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
  ExplosionEntity.call(this, {
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
  this.width = width || ExplosionDamageEntity.width;
  this.height = height || ExplosionDamageEntity.height;

  /** @override **/
  this.imageSrcs = [default1, default2, default3, default4];
}

ExplosionDamageEntity.prototype = Object.create(ExplosionEntity.prototype);

// Size
ExplosionDamageEntity.width = 60;
ExplosionDamageEntity.height = 60;

module.exports = ExplosionDamageEntity;
