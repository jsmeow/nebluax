const Entity = require('../../entity');
const DestroyExplosion = require('../explosion/destroy/destroy-explosion');

function Explosive({
  x,
  y,
  width,
  height,
  speed,
  dx,
  dy,
  faction,
  imageSource,
  degrees,
  creator,
  factory,
  list
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    speed,
    dx,
    dy,
    faction,
    type: ['explosive'],
    imageSource,
    degrees,
    creator,
    factory,
    list
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true
  };

  /** @override **/
  this.points = {
    health: 1,
    attack: 0,
    score: 0,
    value: 0
  };

  /** @override **/
  this.postUpdate = function() {
    if (this.validateBoundaryCollision().all) {
      this.status.dispose = true;
    }

    if (!this.status.alive && this.status.dispose) {
      this.factory.explosion.destroyExplosion({
        x: this.pos.x + this.dims.width - DestroyExplosion.width * 5 * 0.5,
        y: this.pos.y - this.dims.height - DestroyExplosion.height * 5 * 0.5,
        width: DestroyExplosion.width * 5,
        height: DestroyExplosion.height * 5,
        faction: this.creator.faction,
        points: {
          attack: this.creator.points.attack * 2
        }
      });
    }
  };
}

Explosive.prototype = Object.create(Entity.prototype);

module.exports = Explosive;
