const Background = require('../background');

function SpaceBackground({ pos, dims, vector, status, timers, meta }) {
  Background.call(this, {
    pos,
    dims,
    vector: vector || {
      speed: 0.25,
      dy: 1
    },
    props: {
      type: ['space']
    },
    status,
    img: {
      src: './main/entity/type/background/space/assets/images/image-source.png'
    },
    timers,
    meta
  });

  // Background entities

  /** @override **/
  this.entities = [
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
    .flat();
}

SpaceBackground.prototype = Object.create(Background.prototype);

module.exports = SpaceBackground;
