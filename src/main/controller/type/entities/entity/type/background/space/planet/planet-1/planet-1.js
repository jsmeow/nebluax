const Planet = require('../planet');

function Planet1(args) {
  Planet1.call(this, {
    ...args,
    width: Planet1.WIDTH,
    height: Planet1.HEIGHT,
    imgSrc: Planet1.IMG_SRC
  });
}

Planet1.prototype = Object.create(Planet.prototype);

Planet1.DIMS = {
  WIDTH: 29,
  HEIGHT: 29
};

Planet1.PATH = `${Planet.PATH}/planet-1`;
Planet1.WIDTH = 29;
Planet1.HEIGHT = 29;
Planet1.IMG_SRC = `${Planet1.PATH}/assets/images/image-source.png`;

module.exports = Planet1;
