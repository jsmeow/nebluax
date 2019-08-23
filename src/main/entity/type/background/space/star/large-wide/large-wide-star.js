const canvas = require('../../../../../../canvas');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function LargeWideStar({
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
      width: canvas.res * 13,
      height: canvas.res * 9
    },
    vector: vector || {
      speed: (() => getRandomRangedFloat(0.25, 0.3))(),
      dy: 1
    },
    props: {
      type: ['large-wide', ...props.type]
    },
    status,
    points,
    img,
    timers,
    meta
  });
}

LargeWideStar.prototype = Object.create(Star.prototype);

module.exports = LargeWideStar;
