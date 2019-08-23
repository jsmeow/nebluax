const canvas = require('../../../../../canvas');
const Entity = require('../../../../entity');
const getRandomCanvasPosition = require('../../../../util/get-random-canvas-position');
const hasCollidedBoundary = require('../../../../util/has-collided-boundary');

function Star({ pos, dims, vector, props, status, points, img, timers, meta }) {
  Entity.call(this, {
    pos: pos || { ...getRandomCanvasPosition() },
    dims,
    vector,
    props: {
      type: ['bg', 'space', 'star', ...props.type]
    },
    status,
    points,
    img,
    timers,
    meta
  });

  /** @override **/
  this.preUpdate = function() {
    // Get new random position coordinate on bottom boundary collision
    if (hasCollidedBoundary.bottom(this.pos.y, 0)) {
      this.pos = {
        ...getRandomCanvasPosition({ y: [-canvas.height, 0] })
      };
    }
  };
}

Star.prototype = Object.create(Entity.prototype);

module.exports = Star;
