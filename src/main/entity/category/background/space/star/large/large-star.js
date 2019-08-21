const canvas = require('../../../../../../canvas');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function LargeStar({ pos, dims, vector, props, status, points, image, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: canvas.pixel * 5,
      height: canvas.pixel * 5
    },
    vector: {
      ...vector,
      speed: (() => getRandomRangedFloat(0.5, 1.5))(),
      dy: 1
    },
    props: {
      ...props,
      type: [...props.type, 'large']
    },
    status,
    points,
    image,
    meta
  });
}

LargeStar.prototype = Object.create(Star.prototype);

module.exports = LargeStar;
