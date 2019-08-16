const properties = require('../../properties/properties-entity');
const Entity = require('../../entity');

function ProjectileEntity({
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
  Entity.call(this, {
    x,
    y,
    width,
    height,
    faction,
    speed,
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
  this.width = width || ProjectileEntity.WIDTH;
  this.height = height || ProjectileEntity.HEIGHT;

  /** @override **/
  this.x = x || properties.positions.ship.bow.x(this);
  this.y = y || properties.positions.ship.bow.y(this);

  // Flags if the projectile is capable of detonation.
  this.canExplode = canExplode || true;

  // Amount of explosions to create if the projectile is capable of detonation.
  this.explosionAmount = explosionAmount || ProjectileEntity.EXPLOSION_AMOUNT;

  // If the projectile is capable of detonation, pass on this size to the
  // Created explosion entity.
  this.explosionWidth = explosionWidth || ProjectileEntity.EXPLOSION_WIDTH;
  this.explosionHeight = explosionHeight || ProjectileEntity.EXPLOSION_HEIGHT;

  // Vector magnitude constant used for homing.
  // Maximum vector magnitude the bullet can take in dx, dy in special
  // Occasions such as homing.
  this.d = d || ProjectileEntity.D;

  /** @override **/
  this.dx = dx || ProjectileEntity.DX;
  this.dy =
    dy || this.faction === properties.factions.ALLIED
      ? -ProjectileEntity.DY
      : ProjectileEntity.DY;

  /** @override **/
  this.type = [properties.types.PROJECTILE.ID];

  /** @override **/
  this.status.invincible = true;

  /** @override **/
  this.points.attack = creator ? creator.points.attack : this.points.attack;

  // Flag if a boundary collision has occurred.
  // If true, do not detonate on disposal if the projectile is capable of
  // Detonation.
  this.hasCollidedBoundary = false;

  /** @override **/
  this.collisionPost = function() {};

  /** @override **/
  this.updatePre = function() {
    if (this.validateBoundary().all) {
      // Set status flag.
      this.status.alive = false;

      // Set boundary collision flag.
      this.hasCollidedBoundary = true;
    }
  };

  /** @override **/
  this.disposeStart = function(index) {
    // If the projectile is capable of detonation, start disposing only after the
    // The detonation explosions have been created.
    if (this.hasCollidedBoundary || !this.canExplode) {
      this.status.disposing = true;
    } else {
      this.explosionsStart({
        creator: this,
        amount: this.explosionAmount,
        width: this.explosionWidth,
        height: this.explosionHeight,
        faction: this.creator.faction,
        points: {
          attack: this.creator.points.attack * 3
        }
      }).then(() => {
        this.status.disposing = true;
      });
    }

    if (this.status.disposing) {
      // Remove from the entities list.
      this.dispose(index);
    }
  };
}

ProjectileEntity.prototype = Object.create(Entity.prototype);

/** @override **/
ProjectileEntity.WIDTH = properties.sizes.PROJECTILE.BOMB.WIDTH;
ProjectileEntity.HEIGHT = properties.sizes.PROJECTILE.BOMB.HEIGHT;

// Number of explosions to create.
ProjectileEntity.EXPLOSION_AMOUNT = 1;

// Explosion size
ProjectileEntity.EXPLOSION_WIDTH = properties.sizes.EXPLOSION.LARGE.WIDTH;
ProjectileEntity.EXPLOSION_HEIGHT = properties.sizes.EXPLOSION.LARGE.HEIGHT;

// Vector magnitude constant
ProjectileEntity.D = 2;

/** @override **/
ProjectileEntity.DX = 0;
ProjectileEntity.DY = 4;

module.exports = ProjectileEntity;
