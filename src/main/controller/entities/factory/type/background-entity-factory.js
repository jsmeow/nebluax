const SpaceCoverEntity = require('../../entity/background/cover/space/space-cover-entity');
const PlanetPropEntity = require('../../entity/background/prop/space/planet/planet-prop-entity');
const SmallStarPropEntity = require('../../entity/background/prop/space/small-star/small-star-prop-entity');
const MediumStarPropEntity = require('../../entity/background/prop/space/medium-star/medium-star-prop-entity');
const LargeStarPropEntity = require('../../entity/background/prop/space/large-star/large-star-prop-entity');
const LargeWideStarPropEntity = require('../../entity/background/prop/space/large-wide-star/large-wide-star-prop-entity');

function BackgroundEntityFactory(setListIdx) {
  this.setListIdx = setListIdx;

  this.cover = {
    space: args => this.spawn(SpaceCoverEntity, args, true)
  };

  this.prop = {
    space: {
      planet: {
        planet1: (args = {}) => {
          args.imagePath = PlanetPropEntity.IMAGE_PATH.PLANET1;
          return this.spawn(PlanetPropEntity, args);
        },
        planet2: (args = {}) => {
          args.imagePath = PlanetPropEntity.IMAGE_PATH.PLANET2;
          return this.spawn(PlanetPropEntity, args);
        }
      },
      star: {
        small: {
          multicolorBlinking: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.MULTICOLOR_BLINKING;
            return this.spawn(SmallStarPropEntity, args);
          },
          purple1: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.PURPLE1;
            return this.spawn(SmallStarPropEntity, args);
          },
          purple2: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.PURPLE2;
            return this.spawn(SmallStarPropEntity, args);
          },
          purple3: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.PURPLE3;
            return this.spawn(SmallStarPropEntity, args);
          },
          purpleBlinking: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.PURPLE_BLINKING;
            return this.spawn(SmallStarPropEntity, args);
          },
          red1: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.RED1;
            return this.spawn(SmallStarPropEntity, args);
          },
          red2: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.RED2;
            return this.spawn(SmallStarPropEntity, args);
          },
          red3: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.RED3;
            return this.spawn(SmallStarPropEntity, args);
          },
          redBlinking: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.RED_BLINKING;
            return this.spawn(SmallStarPropEntity, args);
          },
          white1: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.WHITE1;
            return this.spawn(SmallStarPropEntity, args);
          },
          white2: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.WHITE2;
            return this.spawn(SmallStarPropEntity, args);
          },
          white3: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.WHITE3;
            return this.spawn(SmallStarPropEntity, args);
          },
          white4: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.WHITE4;
            return this.spawn(SmallStarPropEntity, args);
          },
          white5: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.WHITE5;
            return this.spawn(SmallStarPropEntity, args);
          },
          whiteBlinking: (args = {}) => {
            args.imagePath = SmallStarPropEntity.IMAGE_PATH.WHITE_BLINKING;
            return this.spawn(SmallStarPropEntity, args);
          }
        },
        medium: {
          purpleBlinking: (args = {}) => {
            args.imagePath = MediumStarPropEntity.IMAGE_PATH.PURPLE_BLINKING;
            return this.spawn(MediumStarPropEntity, args);
          },
          redBlinking: (args = {}) => {
            args.imagePath = MediumStarPropEntity.IMAGE_PATH.RED_BLINKING;
            return this.spawn(MediumStarPropEntity, args);
          },
          whiteBlinking: (args = {}) => {
            args.imagePath = MediumStarPropEntity.IMAGE_PATH.WHITE_BLINKING;
            return this.spawn(MediumStarPropEntity, args);
          }
        },
        large: {
          purpleBlinking: (args = {}) => {
            args.imagePath = LargeStarPropEntity.IMAGE_PATH.PURPLE_BLINKING;
            return this.spawn(LargeStarPropEntity, args);
          },
          redBlinking: (args = {}) => {
            args.imagePath = LargeStarPropEntity.IMAGE_PATH.RED_BLINKING;
            return this.spawn(LargeStarPropEntity, args);
          },
          whiteBlinking: (args = {}) => {
            args.imagePath = LargeStarPropEntity.IMAGE_PATH.WHITE_BLINKING;
            return this.spawn(LargeStarPropEntity, args);
          }
        },
        largeWide: {
          purple: (args = {}) => {
            args.imagePath = LargeWideStarPropEntity.IMAGE_PATH.PURPLE;
            return this.spawn(LargeWideStarPropEntity, args);
          },
          red: (args = {}) => {
            args.imagePath = LargeWideStarPropEntity.IMAGE_PATH.RED;
            return this.spawn(LargeWideStarPropEntity, args);
          },
          white: (args = {}) => {
            args.imagePath = LargeWideStarPropEntity.IMAGE_PATH.WHITE;
            return this.spawn(LargeWideStarPropEntity, args);
          }
        }
      }
    }
  };

  this.scene = {
    space: () => {
      const cover = this.cover.space();
      return [
        cover,
        this.prop.space.star.largeWide.purple(),
        this.prop.space.star.largeWide.red(),
        this.prop.space.star.largeWide.white(),
        this.prop.space.star.large.purpleBlinking(),
        this.prop.space.star.large.redBlinking(),
        this.prop.space.star.large.whiteBlinking(),
        this.prop.space.star.medium.purpleBlinking(),
        this.prop.space.star.medium.redBlinking(),
        this.prop.space.star.medium.whiteBlinking(),
        ...[...Array(20)].map(() =>
          this.prop.space.star.small.multicolorBlinking()
        ),
        ...[...Array(5)].map(() => this.prop.space.star.small.purple1()),
        ...[...Array(5)].map(() => this.prop.space.star.small.purple2()),
        ...[...Array(5)].map(() => this.prop.space.star.small.purple3()),
        ...[...Array(5)].map(() => this.prop.space.star.small.purpleBlinking()),
        ...[...Array(5)].map(() => this.prop.space.star.small.red1()),
        ...[...Array(5)].map(() => this.prop.space.star.small.red2()),
        ...[...Array(5)].map(() => this.prop.space.star.small.red3()),
        ...[...Array(5)].map(() => this.prop.space.star.small.redBlinking()),
        ...[...Array(5)].map(() => this.prop.space.star.small.white1()),
        ...[...Array(5)].map(() => this.prop.space.star.small.white2()),
        ...[...Array(5)].map(() => this.prop.space.star.small.white3()),
        ...[...Array(5)].map(() => this.prop.space.star.small.white4()),
        ...[...Array(5)].map(() => this.prop.space.star.small.white5()),
        ...[...Array(20)].map(() => this.prop.space.star.small.whiteBlinking()),
        this.prop.space.planet.planet1(),
        this.prop.space.planet.planet2()
      ];
    }
  };
}

module.exports = BackgroundEntityFactory;
