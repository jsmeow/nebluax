const canvas = require('../../../../../canvas');
const assertBoundaryCollision = require('../../../../event/collision/assert-boundary-collision');
const getRandomCanvasPosition = require('../../../../util/get-random-canvas-position');
const Entity = require('../../../../entity');

function Star({ pos, dims, vector, props, status, points, image, meta }) {
  Entity.call(this, {
    pos: pos || { ...getRandomCanvasPosition() },
    dims,
    vector,
    props: {
      ...props,
      type: [...props.type, 'background', 'space', 'star']
    },
    status,
    points,
    image,
    meta
  });

  /** @override **/
  this.preUpdate = function() {
    // Get new random position coordinate on bottom boundary collision
    if (assertBoundaryCollision(this.pos, this.dims, this.vector).bottom) {
      this.pos = {
        ...getRandomCanvasPosition({ y: { min: -canvas.height, max: 0 } })
      };
    }
  };
}

Star.prototype = Object.create(Entity.prototype);

module.exports = Star;
