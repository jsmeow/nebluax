const { width, height, scale } = require('../../../../../../../options').window;
const Background = require('../background');

function SpaceBackground(args) {
  Background.call(this, {
    ...args,
    width: SpaceBackground.WIDTH,
    height: SpaceBackground.HEIGHT,
    speed: args.speed || 0.25,
    dy: 1,
    imgSrc: SpaceBackground.IMG_SRC
  });

  // Background entities

  /** @override **/
  /*  this.children = [
    [this.meta.factory.bg.space.star.largeWide.purple1, 1],
    [this.meta.factory.bg.space.star.largeWide.red1, 1],
    [this.meta.factory.bg.space.star.largeWide.white1, 1],
    [this.meta.factory.bg.space.star.large.purpleBlinking1, 2],
    [this.meta.factory.bg.space.star.large.redBlinking1, 2],
    [this.meta.factory.bg.space.star.large.whiteBlinking1, 2],
    [this.meta.factory.bg.space.star.medium.purpleBlinking1, 1],
    [this.meta.factory.bg.space.star.medium.redBlinking1, 1],
    [this.meta.factory.bg.space.star.medium.whiteBlinking1, 1],
    [this.meta.factory.bg.space.star.small.multicolorBlinking1, 20],
    [this.meta.factory.bg.space.star.small.purple1, 5],
    [this.meta.factory.bg.space.star.small.purple2, 5],
    [this.meta.factory.bg.space.star.small.purple3, 5],
    [this.meta.factory.bg.space.star.small.purpleBlinking1, 5],
    [this.meta.factory.bg.space.star.small.red1, 5],
    [this.meta.factory.bg.space.star.small.red2, 5],
    [this.meta.factory.bg.space.star.small.red3, 5],
    [this.meta.factory.bg.space.star.small.redBlinking1, 5],
    [this.meta.factory.bg.space.star.small.white1, 5],
    [this.meta.factory.bg.space.star.small.white2, 5],
    [this.meta.factory.bg.space.star.small.white3, 5],
    [this.meta.factory.bg.space.star.small.white4, 5],
    [this.meta.factory.bg.space.star.small.white5, 5],
    [this.meta.factory.bg.space.star.small.whiteBlinking1, 10],
    [this.meta.factory.bg.space.planet.planet1, 1],
    [this.meta.factory.bg.space.planet.planet2, 1]
  ]
    .reduce((entities, [factory, amt]) => {
      entities.push([...Array(amt)].map(factory));
      return entities;
    }, [])
    .flat();*/
}

SpaceBackground.prototype = Object.create(Background.prototype);

SpaceBackground.PATH = `${Background.PATH}/space`;
SpaceBackground.WIDTH = width * scale;
SpaceBackground.HEIGHT = height * scale;
SpaceBackground.IMG_SRC = `${SpaceBackground.PATH}/assets/images/image-source.png`;

module.exports = SpaceBackground;
