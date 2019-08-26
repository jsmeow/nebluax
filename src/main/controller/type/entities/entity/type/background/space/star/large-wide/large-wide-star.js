const Star = require('../star');
const getRndRangedFloat = require('../../../../../util/get-random-ranged-float');

function LargeWideStar(args) {
  Star.call(this, {
    ...args,
    width: LargeWideStar.WIDTH,
    height: LargeWideStar.HEIGHT,
    speed: args.speed || getRndRangedFloat(0.25, 0.3),
    dy: args.dy || 1
  });
}

LargeWideStar.prototype = Object.create(Star.prototype);

LargeWideStar.PATH = `${Star.PATH}/large-wide`;
LargeWideStar.WIDTH = 13;
LargeWideStar.HEIGHT = 9;
LargeWideStar.IMG_SRC = {
  PURPLE: `${LargeWideStar.PATH}/assets/images/purple/image-source.png`,
  RED: `${LargeWideStar.PATH}/assets/images/red/image-source.png`,
  WHITE: `${LargeWideStar.PATH}/assets/images/white/image-source.png`
};

module.exports = LargeWideStar;
