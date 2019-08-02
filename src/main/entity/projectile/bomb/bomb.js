const { fps } = require('../../../options');
const types = require('../../entity-types');
const ProjectileEntity = require('../projectile');

function BombEntity({
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
    x || this.creator.x + this.creator.width * 0.5 - BombEntity.width * 0.5;
  this.y =
    y || this.faction === types.faction.ENEMY
      ? this.creator.y + BombEntity.height * 2
      : this.creator.y - BombEntity.height;

  /** @override **/
  this.width = BombEntity.width;
  this.height = BombEntity.height;

  /** @override **/
  this.points = {
    ...this.points,
    health: 1,
    attack: 0,
    value: 0,
    score: 0,
    shield: 0,
    bomb: 0,
    power: 0,
    life: 0
  };

  /** @override **/
  this.subtype = types.subtype.projectile.BOMB;

  // Flag if collided on a boundary.
  // If true, do not detonate.
  this.didBoundaryCollide = false;
}

BombEntity.prototype = Object.create(ProjectileEntity.prototype);

// Size
BombEntity.width = 6.667 * 5;
BombEntity.height = 6.667 * 5;

// Detonated size
BombEntity.detonatedWidth = 6.667 * 30;
BombEntity.detonatedHeight = 6.667 * 30;

// Detonations
BombEntity.detonations = 2;

/** @override **/
BombEntity.prototype.startExplosionTimer = function() {
  const promises = [...Array(BombEntity.detonations)];

  promises.map((promise, idx) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Create destroy explosion.
        this.factory({
          x: this.util().range(
            this.x - BombEntity.detonatedWidth,
            this.x + BombEntity.detonatedWidth
          ),
          y: this.util().range(
            this.y - BombEntity.detonatedHeight,
            this.y + BombEntity.detonatedHeight
          ),
          width: BombEntity.detonatedWidth,
          height: BombEntity.detonatedHeight,
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
BombEntity.prototype.preUpdate = function() {
  if (this.assertCollision().boundary.all) {
    this.status.alive = false;
    this.didBoundaryCollide = true;
  }
};

/** @override **/
BombEntity.prototype.dispose = function(idx) {
  if (this.didBoundaryCollide) {
    this.status.disposing = true;
  } else {
    // Create destroy explosions.
    this.startExplosionTimer().then(() => {
      this.status.disposing = true;
    });
  }

  if (this.status.disposing) {
    // Remove from the entities list.
    this.remove(idx);
  }
};

module.exports = BombEntity;
