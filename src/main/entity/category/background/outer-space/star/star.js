const canvas = require('../../../../../canvas');
const Entity = require('../../../../entity');

function Star({ width, height, imageSource, minDy = 0.5, maxDy = 0.5 }) {
  Entity.call(this, {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width,
    height,
    dy: Math.random() * (maxDy - minDy) + minDy,
    type: ['background', 'space', 'star'],
    imageSource
  });

  console.log(this.dy);

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
