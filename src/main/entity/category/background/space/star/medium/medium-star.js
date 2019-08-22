const canvas = require('../../../../../../canvas/canvas');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function MediumStar({ pos, dims, vector, props, status, points, image, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 3,
      height: canvas.res * 3
    },
    vector: {
      ...vector,
      speed: (() => getRandomRangedFloat(0.5, 1.5))(),
      dy: 1
    },
    props: {
      ...props,
      type: [...props.type, 'medium']
    },
    status,
    points,
    image,
    meta
  });
}

MediumStar.prototype = Object.create(Star.prototype);

module.exports = MediumStar;
