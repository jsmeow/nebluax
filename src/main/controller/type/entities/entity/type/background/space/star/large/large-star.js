const Star = require('../star');
const util = require('../../../../../util/entity-util');

function LargeStar(args) {
  Star.call(
    this,
    Object.assign(args, {
      width: LargeStar.WIDTH,
      height: LargeStar.HEIGHT,
      speed: args.speed || util.num.rand.float(0.25, 0.3),
      dy: args.dy || 1
    })
  );
}

LargeStar.prototype = Object.create(Star.prototype);

LargeStar.PATH = `${Star.PATH}/large`;
LargeStar.WIDTH = 5;
LargeStar.HEIGHT = 5;
LargeStar.IMG_SRC = {
  PURPLE_BLINKING: [
    `${LargeStar.PATH}/assets/images/purple-blinking/image-source-1.png`,
    `${LargeStar.PATH}/assets/images/purple-blinking/image-source-2.png`,
    `${LargeStar.PATH}/assets/images/purple-blinking/image-source-3.png`,
    `${LargeStar.PATH}/assets/images/purple-blinking/image-source-2.png`
  ],
  RED_BLINKING: [
    `${LargeStar.PATH}/assets/images/red-blinking/image-source-1.png`,
    `${LargeStar.PATH}/assets/images/red-blinking/image-source-2.png`,
    `${LargeStar.PATH}/assets/images/red-blinking/image-source-3.png`,
    `${LargeStar.PATH}/assets/images/red-blinking/image-source-2.png`
  ],
  WHITE_BLINKING: [
    `${LargeStar.PATH}/assets/images/white-blinking/image-source-1.png`,
    `${LargeStar.PATH}/assets/images/white-blinking/image-source-2.png`,
    `${LargeStar.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${LargeStar.PATH}/assets/images/white-blinking/image-source-2.png`
  ]
};

module.exports = LargeStar;
