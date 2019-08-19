const canvas = require('../../../../../canvas');
const Entity = require('../../../../entity');

function Star({ x, y, width, height, imageSource, minDy, maxDy }) {
  Entity.call(this, {
    x: x || Math.random() * canvas.width,
    y: y || Math.random() * canvas.height,
    width,
    height,
    dy: Math.random() * (maxDy - minDy) + minDy,
    type: ['background', 'space', 'star'],
    imageSource
  });

  /** @override **/
  this.preUpdate = function() {
    // Get new random coordinate position on bottom boundary collision.
    if (this.validateBoundaryCollision().bottom) {
      this.randomPosition({ height: { max: -0.5 } });
    }
  };
}

Star.prototype = Object.create(Entity.prototype);

module.exports = Star;
