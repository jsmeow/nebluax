const ExplosionEntity = require('../explosion');
const default1 = './main/entity/explosion/destroy/assets/images/default1.png';
const default2 = './main/entity/explosion/destroy/assets/images/default2.png';
const default3 = './main/entity/explosion/destroy/assets/images/default3.png';
const default4 = './main/entity/explosion/destroy/assets/images/default4.png';

function ExplosionDestroy({ x, y, width, height, entities }) {
  ExplosionEntity.call(this, { x, y, width, height, entities });

  /** @override **/
  this.imageSrc = [default1, default2, default3, default4];
}

ExplosionDestroy.prototype = Object.create(ExplosionEntity.prototype);

module.exports = ExplosionDestroy;
