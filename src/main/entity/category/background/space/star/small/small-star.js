const canvas = require('../../../../../../canvas');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function SmallStar({ pos, dims, vector, props, status, points, image, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: canvas.pixel,
      height: canvas.pixel
    },
    vector: {
      ...vector,
      speed: getRandomRangedFloat(0.5, 1.5),
      dy: 1
    },
    props: {
      ...props,
      type: [...props.type, 'small']
    },
    status,
    points,
    image,
    meta
  });
}

SmallStar.prototype = Object.create(Star.prototype);

module.exports = SmallStar;
