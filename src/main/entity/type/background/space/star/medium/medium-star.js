const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function MediumStar({
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
      width: 3,
      height: 3
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['medium', ...props.type]
    },
    status,
    points,
    img,
    timers,
    meta
  });
}

MediumStar.prototype = Object.create(Star.prototype);

module.exports = MediumStar;
