const Asteroid = require('../asteroid');

function Asteroid1({ pos, dims, vector, status, timers, meta }) {
  Asteroid.call(this, {
    pos,
    dims: dims || {
      width: Asteroid1.dims.width,
      height: Asteroid1.dims.height
    },
    vector,
    props: {
      type: ['asteroid-1']
    },
    status,
    img: {
      src:
        './main/entity/type/game/asteroid/asteroid-1/assets/images/image-source.png'
    },
    timers,
    meta
  });
}

Asteroid1.prototype = Object.create(Asteroid.prototype);

Asteroid1.dims = {
  width: 23,
  height: 23
};

module.exports = Asteroid1;
