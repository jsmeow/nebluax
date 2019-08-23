const Entity = require('../game');
const getRandomRangedFloat = require('../../../util/get-random-ranged-float');
const getRandomCanvasPosition = require('../../../util/get-random-canvas-position');
const hasCollidedBoundary = require('../../../util/has-collided-boundary');

function Asteroid({ pos, dims, vector, props, status, img, timers, meta }) {
  Entity.call(this, {
    pos: pos || { ...getRandomCanvasPosition() },
    dims,
    vector: vector || {
      speed: (() => getRandomRangedFloat(1, 2))(),
      dy: 1
    },
    props: {
      type: ['asteroid', ...props.type]
    },
    status,
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

Asteroid.prototype = Object.create(Entity.prototype);

module.exports = Asteroid;
