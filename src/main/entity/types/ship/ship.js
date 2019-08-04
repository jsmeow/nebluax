const entities = require('../../entities');
const factory = require('../../factory/factory-entity');
const properties = require('../../properties/properties-entity');
const Entity = require('../base/entity');

function ShipEntity({
  x,
  y,
  width,
  height,
  explosionAmount,
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
  this.width = width || ShipEntity.WIDTH;
  this.height = height || ShipEntity.HEIGHT;

  /** @override **/
  this.faction = properties.factions.ENEMY;

  /** @override **/
  this.status.firing = true;

  /** @override **/
  this.points.health = 3;
  this.points.attack = 1;

  // Amount of explosions to create when the ship entity takes damage.
  this.explosionAmount = explosionAmount || ShipEntity.EXPLOSION_AMOUNT;

  /** @override **/
  this.type = [properties.types.SHIP.ID];

  /** @override **/
  this.bombsCreate = function() {
    factory.projectile.standardBomb({ creator: this });
  };

  /** @override **/
  this.bulletsCreate = function() {
    factory.projectile.standardBullet({ creator: this });
  };

  /** @override **/
  this.minesCreate = function() {
    factory.projectile.standardMine({ creator: this });
  };

  /** @override **/
  this.collisionPost = function(hasCollisionOccurred) {
    if (hasCollisionOccurred && !this.status.damaged) {
      this.damageStart();

      if (!this.status.exploding) {
        this.status.exploding = true;

        // Create detonation explosions.
        this.explosionsStart({
          creator: this,
          amount: this.explosionAmount - 1
        }).then(() => {
          this.status.exploding = false;
        });
      }
    }
  };

  /** @override **/
  this.disposeStart = function(index) {
    if (!this.status.exploding) {
      this.status.exploding = true;

      // Create detonation explosions.
      this.explosionsStart({
        creator: this,
        amount: this.explosionAmount
      }).then(() => {
        this.status.disposing = true;
      });
    }

    // Assert and perform event action.
    if (this.status.disposing) {
      this.dispose(index);
    }
  };
}

ShipEntity.prototype = Object.create(Entity.prototype);

// Size
ShipEntity.WIDTH = properties.sizes.SHIP.SMALL.WIDTH;
ShipEntity.HEIGHT = properties.sizes.SHIP.SMALL.HEIGHT;

// Number of explosions to create.
ShipEntity.EXPLOSION_AMOUNT = 3;

module.exports = ShipEntity;
