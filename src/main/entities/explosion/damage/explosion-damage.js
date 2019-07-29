const Explosion = require('../explosion');
const explosion1 =
  './main/entities/explosion/damage/assets/images/explosion-damage1.png';
const explosion2 =
  './main/entities/explosion/damage/assets/images/explosion-damage2.png';
const explosion3 =
  './main/entities/explosion/damage/assets/images/explosion-damage3.png';
const explosion4 =
  './main/entities/explosion/damage/assets/images/explosion-damage4.png';

function ExplosionDamage({ x, y, width, height }) {
  Explosion.call(this, { x, y, width, height });

  /** @override **/
  this.imageSrc = [explosion1, explosion2, explosion3, explosion4];
}

ExplosionDamage.prototype = Object.create(Explosion.prototype);

module.exports = ExplosionDamage;
