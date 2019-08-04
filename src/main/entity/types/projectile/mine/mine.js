const { fps } = require('../../../../options');
const properties = require('../../../properties/properties-entity');
const ProjectileEntity = require('../projectile');

function MineEntity({
  x,
  y,
  width,
  height,
  canExplode,
  explosionAmount,
  explosionWidth,
  explosionHeight,
  faction,
  speed,
  d,
  dx,
  dy,
  type,
  status,
  points,
  timers,
  imageSources,
  creator
}) {
  ProjectileEntity.call(this, {
    x,
    y,
    width,
    height,
    canExplode,
    explosionAmount,
    explosionWidth,
    explosionHeight,
    faction,
    speed,
    d,
    dx,
    dy,
    type,
    status,
    points,
    timers,
    imageSources,
    creator
  });

  /** @override **/
  this.d = d || MineEntity.D;

  /** @override **/
  this.type = [
    properties.types.PROJECTILE.ID,
    properties.types.PROJECTILE.MINE.ID
  ];

  // Flag if mine has been settled in place.
  this.isSettled = false;

  // Explosion timer.
  this.timer = {
    frame: 0,
    delay: fps * 0.5
  };

  /** @override **/
  this.updatePre = function() {
    if (!this.isSettled) {
      if (this.timer.frame < this.timer.delay * 0.25) {
        this.dy =
          this.faction === properties.factions.ENEMY ? this.d[0] : -this.d[0];
      }
      if (
        this.timer.frame >= this.timer.delay * 0.25 &&
        this.timer.frame < this.timer.delay * 0.5
      ) {
        this.dy =
          this.faction === properties.factions.ENEMY ? this.d[1] : -this.d[1];
      }
      if (
        this.timer.frame >= this.timer.delay * 0.5 &&
        this.timer.frame < this.timer.delay * 0.75
      ) {
        this.dy =
          this.faction === properties.factions.ENEMY ? this.d[2] : -this.d[2];
      }
      if (
        this.timer.frame >= this.timer.delay * 0.75 &&
        this.timer.frame < this.timer.delay
      ) {
        this.dy =
          this.faction === properties.factions.ENEMY ? this.d[3] : -this.d[3];
      }
      if (this.timer.frame >= this.timer.delay) {
        this.dy =
          this.faction === properties.factions.ENEMY ? this.d[4] : -this.d[4];
        this.isSettled = true;
      }

      this.timer.frame = this.timer.frame + 1;
    }
  };
}

MineEntity.prototype = Object.create(ProjectileEntity.prototype);

// Vector magnitudes.
MineEntity.D = [4, 3, 2, 1, 0];

module.exports = MineEntity;
