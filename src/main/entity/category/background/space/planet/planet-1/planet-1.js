const canvas = require('../../../../../../canvas/canvas');
const Planet = require('../planet');
const imgSrc =
  './main/entity/category/background/space/planet/planet-1/assets/images/image-source.png';

function Planet1({ pos, dims, vector, props, status, points, img, meta }) {
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
    img: {
      ...img,
      src: imgSrc,
      // sat: 99,
      sat: 0.5
    },
    meta
  });
}

Planet1.prototype = Object.create(Planet.prototype);

module.exports = Planet1;
