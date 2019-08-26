const Star = require('../star');
const getRndRangedFloat = require('../../../../../util/get-random-ranged-float');

function SmallStar(args) {
  Star.call(this, {
    ...args,
    width: SmallStar.WIDTH,
    height: SmallStar.HEIGHT,
    speed: args.speed || getRndRangedFloat(0.25, 1.5),
    dy: args.dy || 1
  });
}

SmallStar.prototype = Object.create(Star.prototype);

SmallStar.PATH = `${Star.PATH}/small`;
SmallStar.WIDTH = 1;
SmallStar.HEIGHT = 1;
SmallStar.IMG_SRC = {
  MULTICOLOR_BLINKING: [
    `${SmallStar.PATH}/assets/images/multicolor-blinking/image-source-1.png`,
    `${SmallStar.PATH}/assets/images/multicolor-blinking/image-source-2.png`,
    `${SmallStar.PATH}/assets/images/multicolor-blinking/image-source-3.png`,
    `${SmallStar.PATH}/assets/images/multicolor-blinking/image-source-2.png`
  ],
  PURPLE1: `${SmallStar.PATH}/assets/images/purple-1/image-source-1.png`,
  PURPLE2: `${SmallStar.PATH}/assets/images/purple-1/image-source-1.png`,
  PURPLE3: `${SmallStar.PATH}/assets/images/purple-1/image-source-1.png`,
  PURPLE_BLINKING: [
    `${SmallStar.PATH}/assets/images/purple-blinking/image-source-1.png`,
    `${SmallStar.PATH}/assets/images/purple-blinking/image-source-2.png`,
    `${SmallStar.PATH}/assets/images/purple-blinking/image-source-3.png`,
    `${SmallStar.PATH}/assets/images/purple-blinking/image-source-2.png`
  ],
  RED1: `${SmallStar.PATH}/assets/images/red-1/image-source-1.png`,
  RED2: `${SmallStar.PATH}/assets/images/red-1/image-source-1.png`,
  RED3: `${SmallStar.PATH}/assets/images/red-1/image-source-1.png`,
  RED_BLINKING: [
    `${SmallStar.PATH}/assets/images/red-blinking/image-source-1.png`,
    `${SmallStar.PATH}/assets/images/red-blinking/image-source-2.png`,
    `${SmallStar.PATH}/assets/images/red-blinking/image-source-3.png`,
    `${SmallStar.PATH}/assets/images/red-blinking/image-source-2.png`
  ],
  WHITE1: `${SmallStar.PATH}/assets/images/white-1/image-source-1.png`,
  WHITE2: `${SmallStar.PATH}/assets/images/white-2/image-source-1.png`,
  WHITE3: `${SmallStar.PATH}/assets/images/white-3/image-source-1.png`,
  WHITE4: `${SmallStar.PATH}/assets/images/white-4/image-source-1.png`,
  WHITE5: `${SmallStar.PATH}/assets/images/white-5/image-source-1.png`,
  WHITE_BLINKING: [
    `${SmallStar.PATH}/assets/images/white-blinking/image-source-1.png`,
    `${SmallStar.PATH}/assets/images/white-blinking/image-source-2.png`,
    `${SmallStar.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${SmallStar.PATH}/assets/images/white-blinking/image-source-2.png`
  ]
};

module.exports = SmallStar;
