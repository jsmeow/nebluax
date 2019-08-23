const canvas = require('../../../../../canvas');
const Entity = require('../../../../entity');
const getRandomRangedFloat = require('../../../../util/get-random-ranged-float');
const getRandomCanvasPosition = require('../../../../util/get-random-canvas-position');
const hasCollidedBoundary = require('../../../../util/has-collided-boundary');

function Planet({
  pos,
  dims,
  vector,
  props,
  status,
  points,
  img,
  timers,
  meta
}) {
  Entity.call(this, {
    pos: pos || { ...getRandomCanvasPosition() },
    dims,
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['bg', 'space', 'planet', ...props.type]
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

Planet.prototype = Object.create(Entity.prototype);

module.exports = Planet;
