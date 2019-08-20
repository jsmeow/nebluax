const canvas = require('../../../../../../canvas');
const getRandomRangedFloat = require('../../../../../util/get-random-ranged-float');
const Star = require('../star');

function MediumStar({ pos, dims, vector, props, status, points, image, meta }) {
  Star.call(this, {
    pos,
    dims: dims || {
      width: canvas.pixel * 3,
      height: canvas.pixel * 3
    },
    vector: {
      ...vector,
      dy: getRandomRangedFloat(0.5, 1.5)
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
