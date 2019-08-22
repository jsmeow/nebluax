const canvas = require('../../../../../../canvas/canvas');
const Planet = require('../planet');
const imageSource =
  './main/entity/category/background/space/planet/planet-3/assets/images/image-source.png';

function Planet3({ pos, dims, vector, props, status, points, image, meta }) {
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
    },
    meta
  });
}

Planet3.prototype = Object.create(Planet.prototype);

module.exports = Planet3;
