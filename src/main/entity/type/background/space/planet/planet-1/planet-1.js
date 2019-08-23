const Planet = require('../planet');

function Planet1({ pos, dims, vector, status, timers, meta }) {
  Planet.call(this, {
    pos,
    dims: dims || {
      width: Planet1.dims.width,
      height: Planet1.dims.height
    },
    vector,
    props: {
      type: ['planet-1']
    },
    status,
    img: {
      src:
        './main/entity/type/background/space/planet/planet-1/assets/images/image-source.png'
    },
    timers,
    meta
  });
}

Planet1.prototype = Object.create(Planet.prototype);

Planet1.dims = {
  width: 29,
  height: 29
};

module.exports = Planet1;
