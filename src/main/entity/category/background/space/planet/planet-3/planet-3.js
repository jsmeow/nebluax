const canvas = require('../../../../../../canvas');
const Planet = require('../planet');
const imgSrc =
  './main/entity/category/background/space/planet/planet-3/assets/images/image-source.png';

function Planet3({ pos, dims, vector, status, points, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 37,
      height: canvas.res * 37
    },
    vector,
    props: {
      type: ['planet1']
    },
    status,
    points,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });
}

Planet3.prototype = Object.create(Planet.prototype);

module.exports = Planet3;
