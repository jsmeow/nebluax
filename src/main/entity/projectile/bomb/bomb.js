const types = require('../../entity-types');
const ProjectileEntity = require('../projectile');

// An entity without health points that can deal attack point damage.
// This entity has a physical presence in the game.
// This entity cannot suffer from status effects.
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
}

BombEntity.prototype = Object.create(ProjectileEntity.prototype);

// Size
BombEntity.width = 6.667 * 5;
BombEntity.height = 6.667 * 5;

// Detonated size
BombEntity.detonatedWidth = 6.667 * 15;
BombEntity.detonatedHeight = 6.667 * 15;

/** @override **/
BombEntity.prototype.preUpdate = function(idx) {
  if (this.assertCollision().boundary.all) {
    this.status.alive = false;
  }

  console.log(console.log(this.status));

  // Assert an entity collision.
  if (this.assertEntitiesCollision(idx)) {
    this.factory({
      width: BombEntity.detonatedWidth,
      height: BombEntity.detonatedHeight,
      entities: this.entities,
      creator: this
    }).explosion.destroy();
  }
};

module.exports = BombEntity;
