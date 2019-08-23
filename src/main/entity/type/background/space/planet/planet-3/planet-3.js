const Planet = require('../planet');
const imgSrc =
  './main/entity/type/background/space/planet/planet-3/assets/images/image-source.png';

function Planet3({ pos, dims, vector, status, points, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: 29,
      height: 29
    },
    vector,
    props: {
      type: ['planet-3']
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
