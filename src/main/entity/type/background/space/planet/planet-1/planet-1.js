const canvas = require('../../../../../../canvas');
const Planet = require('../planet');
const imgSrc =
  './main/entity/type/background/space/planet/planet-1/assets/images/image-source.png';

function Planet1({ pos, dims, vector, status, points, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 29,
      height: canvas.res * 29
    },
    vector,
    props: {
      type: ['planet-1']
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

Planet1.prototype = Object.create(Planet.prototype);

module.exports = Planet1;
