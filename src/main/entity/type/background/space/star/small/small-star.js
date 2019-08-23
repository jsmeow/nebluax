const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function SmallStar({
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
      width: 1,
      height: 1
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 1.5))(),
      dy: 1
    },
    props: {
      type: ['small', ...props.type]
    },
    status,
    points,
    img,
    timers,
    meta
  });
}

SmallStar.prototype = Object.create(Star.prototype);

module.exports = SmallStar;
