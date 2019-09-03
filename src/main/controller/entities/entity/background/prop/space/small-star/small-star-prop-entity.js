const PropEntity = require('../../prop-entity');
const emojis = require('emoji.json/emoji-compact.json');
const utils = require('../../../../../../../utils/utils');

function SmallStarPropEntity(args) {
  PropEntity.call(
    this,
    Object.assign(args, {
      width: SmallStarPropEntity.WIDTH,
      height: SmallStarPropEntity.HEIGHT,
      speed: args.speed || utils.entity.number.rng.float(25, 40),
      imagePath: args.imagePath || SmallStarPropEntity.IMAGE_PATH.WHITE_BLINKING
    })
  );
}

SmallStarPropEntity.prototype = Object.create(PropEntity.prototype);

SmallStarPropEntity.PATH = `${PropEntity.PATH}/space/small-star`;
SmallStarPropEntity.EMOJI = emojis[2851];
SmallStarPropEntity.WIDTH = 1;
SmallStarPropEntity.HEIGHT = 1;
SmallStarPropEntity.IMAGE_PATH = {
  MULTICOLOR_BLINKING: [
    `${SmallStarPropEntity.PATH}/assets/images/multicolor-blinking/image-source-1.png`,
    `${SmallStarPropEntity.PATH}/assets/images/multicolor-blinking/image-source-2.png`,
    `${SmallStarPropEntity.PATH}/assets/images/multicolor-blinking/image-source-3.png`,
    `${SmallStarPropEntity.PATH}/assets/images/multicolor-blinking/image-source-2.png`
  ],
  PURPLE1: `${SmallStarPropEntity.PATH}/assets/images/purple-1/image-source.png`,
  PURPLE2: `${SmallStarPropEntity.PATH}/assets/images/purple-1/image-source.png`,
  PURPLE3: `${SmallStarPropEntity.PATH}/assets/images/purple-1/image-source.png`,
  PURPLE_BLINKING: [
    `${SmallStarPropEntity.PATH}/assets/images/purple-blinking/image-source-1.png`,
    `${SmallStarPropEntity.PATH}/assets/images/purple-blinking/image-source-2.png`,
    `${SmallStarPropEntity.PATH}/assets/images/purple-blinking/image-source-3.png`,
    `${SmallStarPropEntity.PATH}/assets/images/purple-blinking/image-source-2.png`
  ],
  RED1: `${SmallStarPropEntity.PATH}/assets/images/red-1/image-source.png`,
  RED2: `${SmallStarPropEntity.PATH}/assets/images/red-1/image-source.png`,
  RED3: `${SmallStarPropEntity.PATH}/assets/images/red-1/image-source.png`,
  RED_BLINKING: [
    `${SmallStarPropEntity.PATH}/assets/images/red-blinking/image-source-1.png`,
    `${SmallStarPropEntity.PATH}/assets/images/red-blinking/image-source-2.png`,
    `${SmallStarPropEntity.PATH}/assets/images/red-blinking/image-source-3.png`,
    `${SmallStarPropEntity.PATH}/assets/images/red-blinking/image-source-2.png`
  ],
  WHITE1: `${SmallStarPropEntity.PATH}/assets/images/white-1/image-source.png`,
  WHITE2: `${SmallStarPropEntity.PATH}/assets/images/white-2/image-source.png`,
  WHITE3: `${SmallStarPropEntity.PATH}/assets/images/white-3/image-source.png`,
  WHITE4: `${SmallStarPropEntity.PATH}/assets/images/white-4/image-source.png`,
  WHITE5: `${SmallStarPropEntity.PATH}/assets/images/white-5/image-source.png`,
  WHITE_BLINKING: [
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-1.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-2.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-4.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-5.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-4.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${SmallStarPropEntity.PATH}/assets/images/white-blinking/image-source-2.png`
  ]
};

module.exports = SmallStarPropEntity;
