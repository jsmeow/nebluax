const Asteroid = require('../asteroid');

function Asteroid1(args) {
  Asteroid.call(
    this,
    Object.assign(args, {
      width: Asteroid1.WIDTH,
      height: Asteroid1.HEIGHT,
      imgSrc: Asteroid1.IMG_SRC
    })
  );
}

Asteroid1.prototype = Object.create(Asteroid.prototype);

Asteroid1.PATH = `${Asteroid.PATH}/asteroid-1`;
Asteroid1.WIDTH = 23;
Asteroid1.HEIGHT = 23;
Asteroid1.IMG_SRC = `${Asteroid1.PATH}/assets/images/image-source.png`;

module.exports = Asteroid1;
