const Explosion = require('../explosion');
const explosion1 =
  './main/entities/explosion/destroy/assets/images/explosion-destroy1.png';
const explosion2 =
  './main/entities/explosion/destroy/assets/images/explosion-destroy2.png';
const explosion3 =
  './main/entities/explosion/destroy/assets/images/explosion-destroy3.png';
const explosion4 =
  './main/entities/explosion/destroy/assets/images/explosion-destroy4.png';

function ExplosionDestroy({ x, y, width, height }) {
  Explosion.call(this, { x, y, width, height });

  /** @override **/
  this.imageSrc = [explosion1, explosion2, explosion3, explosion4];
}

ExplosionDestroy.prototype = Object.create(Explosion.prototype);

module.exports = ExplosionDestroy;
