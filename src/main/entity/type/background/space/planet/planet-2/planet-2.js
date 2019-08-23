const Planet = require('../planet');

function Planet2({ pos, dims, vector, status, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: Planet2.dims.width,
      height: Planet2.dims.height
    },
    vector,
    props: {
      type: ['planet-2']
    },
    status,
    img: {
      src:
        './main/entity/type/background/space/planet/planet-2/assets/images/image-source.png'
    },
    timers,
    meta
  });
}

Planet2.prototype = Object.create(Planet.prototype);

Planet2.dims = {
  width: 29,
  height: 29
};

module.exports = Planet2;
