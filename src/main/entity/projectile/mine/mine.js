const { fps } = require('../../../options');
const types = require('../../entity-types');
const ProjectileEntity = require('../projectile');

function MineEntity({
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
  ProjectileEntity.call(this, {
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
  this.x =
    x || this.creator.x + this.creator.width * 0.5 - MineEntity.width * 0.5;
  this.y =
    y || this.faction === types.faction.ENEMY
      ? this.creator.y + MineEntity.height * 2
      : this.creator.y - MineEntity.height;

  /** @override **/
  this.width = MineEntity.width;
  this.height = MineEntity.height;

  /** @override **/
  this.dx = 0;
  this.dy = 0;

  /** @override **/
  this.points = {
    ...this.points,
    health: 1,
    attack: 0,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    mine: 0,
    power: 0,
    life: 0
  };

  /** @override **/
  this.subtype = types.subtype.projectile.MINE;

  // Flag if mine has been settled in place.
  this.isSettled = false;
}

MineEntity.prototype = Object.create(ProjectileEntity.prototype);

// Size
MineEntity.width = 6.667 * 5;
MineEntity.height = 6.667 * 5;

// Detonated size
MineEntity.detonatedWidth = 6.667 * 30;
MineEntity.detonatedHeight = 6.667 * 30;

// Detonations
MineEntity.detonations = 2;

// Vector magnitudes.
MineEntity.d = [4, 3, 2, 1, 0];

/** @override **/
MineEntity.prototype.startExplosionTimer = function() {
  const promises = [...Array(MineEntity.detonations)];

  promises.map((promise, idx) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Create destroy explosion.
        this.factory({
          x: this.util().range(
            this.x - MineEntity.detonatedWidth / 2,
            this.x + MineEntity.detonatedWidth / 2
          ),
          y: this.util().range(
            this.y - MineEntity.detonatedHeight / 2,
            this.y + MineEntity.detonatedHeight / 2
          ),
          width: MineEntity.detonatedWidth,
          height: MineEntity.detonatedHeight,
          entities: this.entities,
          faction: idx === 0 ? this.faction : types.faction.NONE,
          factory: this.factory,
          creator: this
        }).explosion.destroy({ attack: this.creator.points.attack * 3 });

        resolve();
      }, fps * 0.5 * idx);
    });
  });

  return Promise.all(promises);
};

/** @override **/
MineEntity.prototype.preUpdate = function() {
  if (!this.isSettled) {
    if (this.timer.mine.frame < this.timer.mine.duration * 0.25) {
      this.dy =
        this.faction === types.faction.ENEMY
          ? MineEntity.d[0]
          : -MineEntity.d[0];
    }
    if (
      this.timer.mine.frame >= this.timer.mine.duration * 0.25 &&
      this.timer.mine.frame < this.timer.mine.duration * 0.5
    ) {
      this.dy =
        this.faction === types.faction.ENEMY
          ? MineEntity.d[1]
          : -MineEntity.d[1];
    }
    if (
      this.timer.mine.frame >= this.timer.mine.duration * 0.5 &&
      this.timer.mine.frame < this.timer.mine.duration * 0.75
    ) {
      this.dy =
        this.faction === types.faction.ENEMY
          ? MineEntity.d[2]
          : -MineEntity.d[2];
    }
    if (
      this.timer.mine.frame >= this.timer.mine.duration * 0.75 &&
      this.timer.mine.frame < this.timer.mine.duration
    ) {
      this.dy =
        this.faction === types.faction.ENEMY
          ? MineEntity.d[3]
          : -MineEntity.d[3];
    }
    if (this.timer.mine.frame >= this.timer.mine.duration) {
      this.dy =
        this.faction === types.faction.ENEMY
          ? MineEntity.d[4]
          : -MineEntity.d[4];
      this.isSettled = true;
    }

    console.log(this.timer.mine.frame);

    this.timer.mine.frame = this.timer.mine.frame + 1;
  }
};

/** @override **/
MineEntity.prototype.dispose = function(idx) {
  // Create destroy explosions.
  this.startExplosionTimer().then(() => {
    this.status.disposing = true;
  });

  if (this.status.disposing) {
    // Remove from the entities list.
    this.remove(idx);
  }
};

module.exports = MineEntity;
