const canvas = require('../../../../../canvas');
const assertBoundaryCollision = require('../../../../event/collision/assert-boundary-collision');
const getRandomRangedFloat = require('../../../../util/get-random-ranged-float');
const getRandomCanvasPosition = require('../../../../util/get-random-canvas-position');
const Entity = require('../../../../entity');

function Planet({ pos, dims, vector, props, status, points, img, meta }) {
  Entity.call(this, {
    pos: pos || {
      ...getRandomCanvasPosition({ y: { min: 0, max: -canvas.height } })
    },
    dims,
    vector: {
      ...vector,
      // speed: (() => getRandomRangedFloat(0.5, 1.5))(),
      speed: 1,
      dy: 1
    },
    props: {
      ...props,
      type: ['background', 'space', 'planet']
    },
    status,
    points,
    img,
    meta
  });

  /** @override **/
  this.preUpdate = function() {
    // Get new random position coordinate on bottom boundary collision
    if (assertBoundaryCollision(this.pos, { height: 0 }, this.vector).bottom) {
      this.pos = {
        ...getRandomCanvasPosition({ y: { min: -canvas.height, max: 0 } })
      };
    }
  };
}

Planet.prototype = Object.create(Entity.prototype);

module.exports = Planet;
