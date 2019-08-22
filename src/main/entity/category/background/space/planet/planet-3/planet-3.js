const canvas = require('../../../../../../canvas/canvas');
const Planet = require('../planet');
const imgSrc =
  './main/entity/category/background/space/planet/planet-3/assets/images/image-source.png';

function Planet3({ pos, dims, vector, props, status, points, img, meta }) {
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
      src: imgSrc
    },
    meta
  });
}

Planet3.prototype = Object.create(Planet.prototype);

module.exports = Planet3;
