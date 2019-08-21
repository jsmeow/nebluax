const canvas = require('../../../../../../canvas');
const Planet = require('../planet');
const imageSource =
  './main/entity/category/background/space/planet/planet-1/assets/images/image-source.png';

function Planet1({ pos, dims, vector, props, status, points, image, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: canvas.pixel * 37,
      height: canvas.pixel * 37
    },
    vector,
    props,
    status,
    points,
    image: {
      ...image,
      src: imageSource,
      // sat: 99,
      sat: 0.5
    },
    meta
  });
}

Planet1.prototype = Object.create(Planet.prototype);

module.exports = Planet1;
