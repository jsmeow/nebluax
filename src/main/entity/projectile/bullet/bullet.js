const Projectile = require('../projectile');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
function Bullet({ x, y, width, height, entities, faction, creator, attack }) {
  Projectile.call(this, {
    x,
    y,
    width,
    height,
    entities,
    faction,
    creator,
    attack
  });

  /** @override **/
  this.subtype = Projectile.subtypes.BULLET;
}

Bullet.prototype = Object.create(Projectile.prototype);

module.exports = Bullet;
