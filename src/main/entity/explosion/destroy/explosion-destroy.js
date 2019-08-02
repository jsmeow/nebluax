const ExplosionEntity = require('../explosion');
const default1 = './main/entity/explosion/destroy/assets/images/default1.png';
const default2 = './main/entity/explosion/destroy/assets/images/default2.png';
const default3 = './main/entity/explosion/destroy/assets/images/default3.png';
const default4 = './main/entity/explosion/destroy/assets/images/default4.png';

function ExplosionDestroyEntity({
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
  this.width = width || ExplosionDestroyEntity.width;
  this.height = height || ExplosionDestroyEntity.height;

  /** @override **/
  this.imageSrcs = [default1, default2, default3, default4];
}

ExplosionDestroyEntity.prototype = Object.create(ExplosionEntity.prototype);

// Size
ExplosionDestroyEntity.width = 60;
ExplosionDestroyEntity.height = 60;

module.exports = ExplosionDestroyEntity;
