const { window } = require('../../../../../../../options');
const Background = require('../background');
const emojis = require('emoji.json/emoji-compact.json');

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

  // The space background entity factories used
  const { star: starFactory, planet: planetFactory } = this.factory.bg.space;

  // Spawn the background children entities
  this.spawnChildren([
    starFactory.largeWide.purple({ creator: this }),
    starFactory.largeWide.red({ creator: this }),
    starFactory.largeWide.white({ creator: this }),
    starFactory.large.purpleBlinking({ creator: this }),
    starFactory.large.redBlinking({ creator: this }),
    starFactory.large.whiteBlinking({ creator: this }),
    starFactory.medium.purpleBlinking({ creator: this }),
    starFactory.medium.redBlinking({ creator: this }),
    starFactory.medium.whiteBlinking({ creator: this }),
    ...[...Array(5)].map(() => starFactory.small.purple1({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.purple2({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.purple3({ creator: this })),
    ...[...Array(5)].map(() =>
      starFactory.small.purpleBlinking({ creator: this })
    ),
    ...[...Array(5)].map(() => starFactory.small.red1({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.red2({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.red3({ creator: this })),
    ...[...Array(5)].map(() =>
      starFactory.small.redBlinking({ creator: this })
    ),
    ...[...Array(5)].map(() => starFactory.small.white1({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.white2({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.white3({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.white4({ creator: this })),
    ...[...Array(5)].map(() => starFactory.small.white5({ creator: this })),
    ...[...Array(20)].map(() =>
      starFactory.small.whiteBlinking({ creator: this })
    ),
    planetFactory[1]({ creator: this }),
    planetFactory[2]({ creator: this })
  ]);
}

SpaceBackground.prototype = Object.create(Background.prototype);

SpaceBackground.PATH = `${Background.PATH}/space`;
SpaceBackground.EMOJI = emojis[2853];
SpaceBackground.WIDTH = window.width;
SpaceBackground.HEIGHT = window.height;
SpaceBackground.IMG_SRC = `${SpaceBackground.PATH}/assets/images/image-source.png`;

module.exports = SpaceBackground;
