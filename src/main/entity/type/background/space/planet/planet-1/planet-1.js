const Planet = require('../planet');
const imgSrc =
  './main/entity/type/background/space/planet/planet-1/assets/images/image-source.png';

function Planet1({ pos, dims, vector, status, points, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: 29,
      height: 29
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
