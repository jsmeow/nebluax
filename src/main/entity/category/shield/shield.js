const { fps } = require('../../../options');
const canvas = require('../../../canvas');
const Entity = require('../../entity');

function Shield({ creator, list }) {
  Entity.call(this, {
    x: creator.x - canvas.pixel * 3,
    y: creator.y + canvas.pixel * 3,
    width: creator.width + canvas.pixel * 6,
    height: creator.height + canvas.pixel * 6,
    type: ['shield'],
    imageSource: creator.imageSource[4],
    degrees: creator.degrees,
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
  this.animationTimer.delay = fps * 0.25;

  /** @override **/
  this.updatePosition = function() {
    this.x = creator.x - canvas.pixel * 3;
    this.y = creator.y - canvas.pixel * 3;
  };
}

Shield.prototype = Object.create(Entity.prototype);

module.exports = Shield;
