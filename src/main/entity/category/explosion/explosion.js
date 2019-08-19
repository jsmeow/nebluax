const { fps } = require('../../../options');
const Entity = require('../../entity');

function Explosion({
  x,
  y,
  width,
  height,
  faction,
  points,
  imageSource,
  list
}) {
  Entity.call(this, {
    x,
    y,
    width,
    height,
    type: ['explosion'],
    faction: faction || 'neutral',
    points,
    imageSource,
    list
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    invincible: true
  };

  /** @override **/
  this.points = {
    ...this.points
  };

  /** @override **/
  this.animationTimer.delay = fps * 0.5;
}

Explosion.prototype = Object.create(Entity.prototype);

module.exports = Explosion;
