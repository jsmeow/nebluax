const canvas = require('../../../../../../canvas');
const Planet = require('../planet');
const imgSrc =
  './main/entity/type/background/space/planet/planet-2/assets/images/image-source.png';

function Planet2({ pos, dims, vector, status, points, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 29,
      height: canvas.res * 29
    },
    vector,
    props: {
      type: ['planet-2']
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

Planet2.prototype = Object.create(Planet.prototype);

module.exports = Planet2;
