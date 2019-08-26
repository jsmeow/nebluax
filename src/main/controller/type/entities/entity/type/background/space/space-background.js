const { window } = require('../../../../../../../options');
const Background = require('../background');

function SpaceBackground(args) {
  Background.call(
    this,
    Object.assign(args, {
      width: SpaceBackground.WIDTH,
      height: SpaceBackground.HEIGHT,
      speed: args.speed || 0.25,
      dy: 1,
      imgSrc: SpaceBackground.IMG_SRC
    })
  );

  // Background entities

  /** @override **/
  this.children = [
    Array(1).fill(this.factory.bg.space.star.largeWide.purple),
    Array(1).fill(this.factory.bg.space.star.largeWide.red),
    Array(1).fill(this.factory.bg.space.star.largeWide.white),

    Array(1).fill(this.factory.bg.space.star.large.purpleBlinking),
    Array(1).fill(this.factory.bg.space.star.large.redBlinking),
    Array(1).fill(this.factory.bg.space.star.large.whiteBlinking),

    Array(1).fill(this.factory.bg.space.star.medium.purpleBlinking),
    Array(1).fill(this.factory.bg.space.star.medium.redBlinking),
    Array(1).fill(this.factory.bg.space.star.medium.whiteBlinking),

    Array(20).fill(this.factory.bg.space.star.small.multicolorBlinking),

    Array(5).fill(this.factory.bg.space.star.small.purple1),
    Array(5).fill(this.factory.bg.space.star.small.purple2),
    Array(5).fill(this.factory.bg.space.star.small.purple3),
    Array(5).fill(this.factory.bg.space.star.small.purpleBlinking),

    Array(5).fill(this.factory.bg.space.star.small.red1),
    Array(5).fill(this.factory.bg.space.star.small.red2),
    Array(5).fill(this.factory.bg.space.star.small.red3),
    Array(5).fill(this.factory.bg.space.star.small.redBlinking),

    Array(5).fill(this.factory.bg.space.star.small.white1),
    Array(5).fill(this.factory.bg.space.star.small.white2),
    Array(5).fill(this.factory.bg.space.star.small.white3),
    Array(5).fill(this.factory.bg.space.star.small.white4),
    Array(5).fill(this.factory.bg.space.star.small.white5),
    Array(20).fill(this.factory.bg.space.star.small.whiteBlinking),

    Array(1).fill(this.factory.bg.space.planet[1]),
    Array(1).fill(this.factory.bg.space.planet[2])
  ]
    .reduce((children, entities) => {
      children.push(entities.map(entity => entity()));
      return children;
    }, [])
    .flat();
}

SpaceBackground.prototype = Object.create(Background.prototype);

SpaceBackground.PATH = `${Background.PATH}/space`;
SpaceBackground.WIDTH = window.width;
SpaceBackground.HEIGHT = window.height;
SpaceBackground.IMG_SRC = `${SpaceBackground.PATH}/assets/images/image-source.png`;

module.exports = SpaceBackground;
