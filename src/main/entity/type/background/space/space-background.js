const Background = require('../background');
const imgSrc =
  './main/entity/type/background/space/assets/images/image-source.png';

function SpaceBackground({ pos, dims, vector, status, points, timers, meta }) {
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
    points,
    img: {
      src: imgSrc
    },
    timers,
    meta
  });

  // Background entities

  /** @override **/
  this.entities = [
    [this.meta.factory.bg.space.star.largeWide.largeWidePurpleStar1, 1],
    [this.meta.factory.bg.space.star.largeWide.largeWideRedStar1, 1],
    [this.meta.factory.bg.space.star.largeWide.largeWideWhiteStar1, 1],
    [this.meta.factory.bg.space.star.large.largeBlinkingPurpleStar1, 2],
    [this.meta.factory.bg.space.star.large.largeBlinkingRedStar1, 2],
    [this.meta.factory.bg.space.star.large.largeBlinkingWhiteStar1, 2],
    [this.meta.factory.bg.space.star.medium.mediumBlinkingPurpleStar1, 1],
    [this.meta.factory.bg.space.star.medium.mediumBlinkingRedStar1, 1],
    [this.meta.factory.bg.space.star.medium.mediumBlinkingWhiteStar1, 1],
    [this.meta.factory.bg.space.star.small.smallBlinkingMulticolorStar1, 20],
    [this.meta.factory.bg.space.star.small.smallWhiteStar1, 5],
    [this.meta.factory.bg.space.star.small.smallWhiteStar2, 5],
    [this.meta.factory.bg.space.star.small.smallWhiteStar3, 5],
    [this.meta.factory.bg.space.star.small.smallWhiteStar4, 5],
    [this.meta.factory.bg.space.star.small.smallWhiteStar5, 5],
    [this.meta.factory.bg.space.star.small.smallBlinkingWhiteStar1, 10],
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
