const { fps } = require('../../../options');
const Entity = require('../../entity');

function ShipTrail({
  width,
  height,
  imageSource,
  degrees,
  creator,
  list,
  getX,
  getY
}) {
  Entity.call(this, {
    x: getX(),
    y: getY(),
    width,
    height,
    type: ['ship-trail'],
    imageSource,
    degrees,
    creator,
    list
  });

  /** @override **/
  this.status = {
    ...this.status,
    alive: true,
    invincible: true
  };

  /** @override **/
  this.animationTimer.delay = fps * 0.2;

  /** @override **/
  this.updatePosition = function() {
    this.x = getX();
    this.y = getY();
  };
}

ShipTrail.prototype = Object.create(Entity.prototype);

module.exports = ShipTrail;
