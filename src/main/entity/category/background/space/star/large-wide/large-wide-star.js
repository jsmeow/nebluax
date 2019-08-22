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
  meta
}) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 13,
      height: canvas.res * 9
    },
    vector: {
      ...vector,
      // speed: (() => getRandomRangedFloat(0.1, 0.3))(),
      speed: 1,
      dy: 1
    },
    props: {
      ...props,
      type: [...props.type, 'large-wide']
    },
    status,
    points,
    img,
    meta
  });
}

LargeWideStar.prototype = Object.create(Star.prototype);

module.exports = LargeWideStar;
