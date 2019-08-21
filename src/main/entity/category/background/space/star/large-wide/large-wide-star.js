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
  image,
  meta
}) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: canvas.pixel * 13,
      height: canvas.pixel * 9
    },
    vector: {
      ...vector,
      speed: (() => getRandomRangedFloat(0.1, 0.3))(),
      dy: 1
    },
    props: {
      ...props,
      type: [...props.type, 'large-wide']
    },
    status,
    points,
    image,
    meta
  });
}

LargeWideStar.prototype = Object.create(Star.prototype);

module.exports = LargeWideStar;
