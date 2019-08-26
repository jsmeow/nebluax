const Asteroid = require('../asteroid');

function Asteroid1({ dims, props, ...args }) {
  Asteroid.call(this, {
    dims: dims || {
      width: Asteroid1.dims.width,
      height: Asteroid1.dims.height
    },
    props: {
      type: ['1'],
      ...props
    },
    ...args
  });
}

Asteroid1.prototype = Object.create(Asteroid.prototype);

Asteroid1.dims = {
  width: 23,
  height: 23
};

Asteroid1.imgSrc =
  './main/entity/type/game/asteroid/asteroid-1/assets/images/image-source.png';

module.exports = Asteroid1;
