const Entity = require('../game');
const getRandomRangedFloat = require('../../../util/type/get-random-ranged-float');
const getRandomCanvasPosition = require('../../../util/type/get-random-canvas-position');
const hasCollidedBoundary = require('../../../util/type/has-collided-boundary');

function Asteroid({ pos, vector, props, ...args }) {
  Entity.call(this, {
    pos: pos || { ...getRandomCanvasPosition() },
    vector: {
      speed: (() => getRandomRangedFloat(1, 2))(),
      dy: 1,
      ...vector
    },
    props: {
      type: ['asteroid', ...props.type]
    },
    ...args
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
