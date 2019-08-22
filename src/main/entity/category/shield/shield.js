const { fps } = require('../../../options');
const canvas = require('../../../canvas/canvas');
const Entity = require('../../entity');

function Shield({ creator, entities }) {
  Entity.call(this, {
    x: creator.x - canvas.res * 3,
    y: creator.y + canvas.res * 3,
    width: creator.width + canvas.res * 6,
    height: creator.height + canvas.res * 6,
    type: ['shield'],
    imgSrc: creator.imgSrc[4],
    degrees: creator.degrees,
    creator,
    entities
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
    this.pos.x = creator.x - canvas.res * 3;
    this.pos.y = creator.y - canvas.res * 3;
  };
}

Shield.prototype = Object.create(Entity.prototype);

module.exports = Shield;
