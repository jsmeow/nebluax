const Explosion = require('../explosion');
const default1 = './main/entity/explosion/damage/assets/images/default1.png';
const default2 = './main/entity/explosion/damage/assets/images/default2.png';
const default3 = './main/entity/explosion/damage/assets/images/default3.png';
const default4 = './main/entity/explosion/damage/assets/images/default4.png';

function ExplosionDamage({ x, y, width, height, entities }) {
  Explosion.call(this, { x, y, width, height, entities });

  /** @override **/
  this.imageSrc = [default1, default2, default3, default4];
}

ExplosionDamage.prototype = Object.create(Explosion.prototype);

module.exports = ExplosionDamage;
