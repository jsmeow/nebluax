const EntityFactory = require('../entity-factory');
const SpaceBackground = require('../../entity/type/background/space/space-background');
const Planet1 = require('../../entity/type/background/space/planet/planet-1/planet-1');
const Planet2 = require('../../entity/type/background/space/planet/planet-2/planet-2');
const SmallStar = require('../../entity/type/background/space/star/small/small-star');
const MediumStar = require('../../entity/type/background/space/star/medium/medium-star');
const LargeStar = require('../../entity/type/background/space/star/large/large-star');
const LargeWideStar = require('../../entity/type/background/space/star/large-wide/large-wide-star');

function BackgroundFactory(idx) {
  EntityFactory.call(this, idx);

  this.space = {
    bg: args => this.spawn(SpaceBackground, args, true),
    planet: {
      1: args => this.spawn(Planet1, args),
      2: args => this.spawn(Planet2, args)
    },
    star: {
      small: {
        multicolorBlinking: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.MULTICOLOR_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        purple1: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.PURPLE1 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        purple2: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.PURPLE2 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        purple3: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.PURPLE3 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        purpleBlinking: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.PURPLE_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        red1: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.RED1 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        red2: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.RED2 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        red3: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.RED3 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        redBlinking: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.RED_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        white1: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.WHITE1 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        white2: (args = { img: {} }) => {
          const imgSrc = { src: SmallStar.IMG_SRC.WHITE2 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        white3: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.WHITE3 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        white4: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.WHITE4 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        white5: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.WHITE5 };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        whiteBlinking: (args = {}) => {
          const imgSrc = { src: SmallStar.IMG_SRC.WHITE_BLINKING };
          Object.assign(Object.assign(args, { img: {} }).img, imgSrc);
          return this.spawn(SmallStar, args);
        }
      },
      medium: {
        purpleBlinking: (args = {}) => {
          const imgSrc = { src: MediumStar.IMG_SRC.PURPLE_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn(SmallStar, args);
        },
        redBlinking: (args = {}) => {
          const imgSrc = { src: MediumStar.IMG_SRC.RED_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn([MediumStar, args]);
        },
        whiteBlinking: (args = {}) => {
          const imgSrc = { src: MediumStar.IMG_SRC.WHITE_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn([MediumStar, args]);
        }
      },
      large: {
        purpleBlinking: (args = {}) => {
          const imgSrc = { src: LargeStar.IMG_SRC.PURPLE_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn([LargeStar, args]);
        },
        RED_BLINKING: (args = {}) => {
          const imgSrc = { src: LargeStar.IMG_SRC.RED_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn([LargeStar, args]);
        },
        WHITE_BLINKING: (args = {}) => {
          const imgSrc = { src: LargeStar.IMG_SRC.WHITE_BLINKING };
          Object.assign(args, { img: imgSrc });
          return this.spawn([LargeStar, args]);
        }
      },
      largeWide: {
        purple: (args = {}) => {
          const imgSrc = { src: LargeWideStar.IMG_SRC.PURPLE };
          Object.assign(args, { img: imgSrc });
          return this.spawn([LargeWideStar, args]);
        },
        red: (args = {}) => {
          const imgSrc = { src: LargeWideStar.IMG_SRC.RED };
          Object.assign(args, { img: imgSrc });
          return this.spawn([LargeWideStar, args]);
        },
        white: (args = {}) => {
          const imgSrc = { src: LargeWideStar.IMG_SRC.WHITE };
          Object.assign(args, { img: imgSrc });
          return this.spawn([LargeWideStar, args]);
        }
      }
    }
  };
}

BackgroundFactory.prototype = Object.create(EntityFactory.prototype);

module.exports = BackgroundFactory;
