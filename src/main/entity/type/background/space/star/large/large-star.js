const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function LargeStar({
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
  Star.call(this, {
    pos,
    dims: dims || {
      width: 5,
      height: 5
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['large', ...props.type]
    },
    status,
    points,
    img,
    timers,
    meta
  });
}

LargeStar.prototype = Object.create(Star.prototype);

module.exports = LargeStar;
