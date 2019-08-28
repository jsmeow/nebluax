const SpaceBackground = require('../../entity/type/background/space/space-background');
const Planet1 = require('../../entity/type/background/space/planet/planet-1/planet-1');
const Planet2 = require('../../entity/type/background/space/planet/planet-2/planet-2');
const SmallStar = require('../../entity/type/background/space/star/small/small-star');
const MediumStar = require('../../entity/type/background/space/star/medium/medium-star');
const LargeStar = require('../../entity/type/background/space/star/large/large-star');
const LargeWideStar = require('../../entity/type/background/space/star/large-wide/large-wide-star');

function BackgroundEntityFactory(setListIdx) {
  this.setListIdx = setListIdx;

  this.space = {
    bg: (args = {}) => this.spawn(SpaceBackground, args, true),
    planet: {
      1: (args = {}) => this.spawn(Planet1, args),
      2: (args = {}) => this.spawn(Planet2, args)
    },
    star: {
      small: {
        multicolorBlinking: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.MULTICOLOR_BLINKING;
          return this.spawn(SmallStar, args);
        },
        purple1: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.PURPLE1;
          return this.spawn(SmallStar, args);
        },
        purple2: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.PURPLE2;
          return this.spawn(SmallStar, args);
        },
        purple3: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.PURPLE3;
          return this.spawn(SmallStar, args);
        },
        purpleBlinking: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.PURPLE_BLINKING;
          return this.spawn(SmallStar, args);
        },
        red1: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.RED1;
          return this.spawn(SmallStar, args);
        },
        red2: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.RED2;
          return this.spawn(SmallStar, args);
        },
        red3: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.RED3;
          return this.spawn(SmallStar, args);
        },
        redBlinking: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.RED_BLINKING;
          return this.spawn(SmallStar, args);
        },
        white1: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.WHITE1;
          return this.spawn(SmallStar, args);
        },
        white2: (args = { img: {} }) => {
          args.imgSrc = SmallStar.IMG_SRC.WHITE2;
          return this.spawn(SmallStar, args);
        },
        white3: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.WHITE3;
          return this.spawn(SmallStar, args);
        },
        white4: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.WHITE4;
          return this.spawn(SmallStar, args);
        },
        white5: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.WHITE5;
          return this.spawn(SmallStar, args);
        },
        whiteBlinking: (args = {}) => {
          args.imgSrc = SmallStar.IMG_SRC.WHITE_BLINKING;
          return this.spawn(SmallStar, args);
        }
      },
      medium: {
        purpleBlinking: (args = {}) => {
          args.imgSrc = MediumStar.IMG_SRC.PURPLE_BLINKING;
          return this.spawn(MediumStar, args);
        },
        redBlinking: (args = {}) => {
          args.imgSrc = MediumStar.IMG_SRC.RED_BLINKING;
          return this.spawn(MediumStar, args);
        },
        whiteBlinking: (args = {}) => {
          args.imgSrc = MediumStar.IMG_SRC.WHITE_BLINKING;
          return this.spawn(MediumStar, args);
        }
      },
      large: {
        purpleBlinking: (args = {}) => {
          args.imgSrc = LargeStar.IMG_SRC.PURPLE_BLINKING;
          return this.spawn(LargeStar, args);
        },
        redBlinking: (args = {}) => {
          args.imgSrc = LargeStar.IMG_SRC.RED_BLINKING;
          return this.spawn(LargeStar, args);
        },
        whiteBlinking: (args = {}) => {
          args.imgSrc = LargeStar.IMG_SRC.WHITE_BLINKING;
          return this.spawn(LargeStar, args);
        }
      },
      largeWide: {
        purple: (args = {}) => {
          args.imgSrc = LargeWideStar.IMG_SRC.PURPLE;
          return this.spawn(LargeWideStar, args);
        },
        red: (args = {}) => {
          args.imgSrc = LargeWideStar.IMG_SRC.RED;
          return this.spawn(LargeWideStar, args);
        },
        white: (args = {}) => {
          args.imgSrc = LargeWideStar.IMG_SRC.WHITE;
          return this.spawn(LargeWideStar, args);
        }
      }
    }
  };
}

module.exports = BackgroundEntityFactory;
