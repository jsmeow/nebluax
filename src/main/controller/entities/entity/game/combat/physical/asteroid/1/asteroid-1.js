const Asteroid = require('../asteroid');

function Asteroid1(args) {
  Asteroid.call(
    this,
    Object.assign(args, {
      width: Asteroid1.WIDTH,
      height: Asteroid1.HEIGHT,
      imagePath: Asteroid1.IMAGE_PATH.BASIC,
      imagePathDamaged: Asteroid1.IMAGE_PATH.DAMAGED,
      health: 3,
      attack: 1
    })
  );
}

Asteroid1.prototype = Object.create(Asteroid.prototype);

Asteroid1.PATH = `${Asteroid.PATH}/1`;
Asteroid1.WIDTH = 23;
Asteroid1.HEIGHT = 23;
Asteroid1.IMAGE_PATH = {
  BASIC: `${Asteroid1.PATH}/assets/images/basic/image-source.png`,
  DAMAGED: `${Asteroid1.PATH}/assets/images/damaged/image-source.png`
};

module.exports = Asteroid1;
