const Planet = require('../planet');

function Planet2(args) {
  Planet.call(
    this,
    Object.assign(args, {
      width: Planet2.WIDTH,
      height: Planet2.HEIGHT,
      imgSrc: Planet2.IMG_SRC
    })
  );
}

Planet2.prototype = Object.create(Planet.prototype);

Planet2.DIMS = {
  WIDTH: 29,
  HEIGHT: 29
};

Planet2.PATH = `${Planet.PATH}/planet-2`;
Planet2.WIDTH = 29;
Planet2.HEIGHT = 29;
Planet2.IMG_SRC = `${Planet2.PATH}/assets/images/image-source.png`;

module.exports = Planet2;
