const canvas = require('../../../../../../canvas/canvas');
const Planet = require('../planet');
const imageSource =
  './main/entity/category/background/space/planet/planet-2/assets/images/image-source.png';

function Planet2({ pos, dims, vector, props, status, points, image, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 37,
      height: canvas.res * 37
    },
    vector,
    props,
    status,
    points,
    image: {
      ...image,
      src: imageSource
      // sat: 99
    },
    meta
  });
}

Planet2.prototype = Object.create(Planet.prototype);

module.exports = Planet2;
