const Planet = require('../planet');

function Planet3({ pos, dims, vector, status, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: Planet3.dims.width,
      height: Planet3.dims.height
    },
    vector,
    props: {
      type: ['planet-3']
    },
    status,
    img: {
      src:
        './main/entity/type/background/space/planet/planet-3/assets/images/image-source.png'
    },
    timers,
    meta
  });
}

Planet3.prototype = Object.create(Planet.prototype);

Planet3.dims = {
  width: 29,
  height: 29
};

module.exports = Planet3;
