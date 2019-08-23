const canvas = require('../../../../../canvas');
const Asteroid = require('../asteroid');
const imgSrc =
  './main/entity/type/game/asteroid/asteroid-1/assets/images/image-source.png';

function Asteroid1({ pos, dims, vector, status, points, meta }) {
  Asteroid.call(this, {
    pos,
    dims: dims || {
      width: canvas.res * 23,
      height: canvas.res * 23
    },
    vector,
    props: {
      type: ['asteroid-1']
    },
    status,
    points,
    img: {
      src: imgSrc
    },
    meta
  });
}

Asteroid1.prototype = Object.create(Asteroid.prototype);

module.exports = Asteroid1;
