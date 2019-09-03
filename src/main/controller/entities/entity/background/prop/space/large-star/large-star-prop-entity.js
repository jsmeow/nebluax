const PropEntity = require('../../prop-entity');
const emojis = require('emoji.json/emoji-compact.json');

function LargeStarPropEntity(args) {
  PropEntity.call(
    this,
    Object.assign(args, {
      width: LargeStarPropEntity.WIDTH,
      height: LargeStarPropEntity.HEIGHT,
      imagePath: args.imagePath || LargeStarPropEntity.IMAGE_PATH.WHITE_BLINKING
    })
  );
}

LargeStarPropEntity.prototype = Object.create(PropEntity.prototype);

LargeStarPropEntity.PATH = `${PropEntity.PATH}/space/large-star`;
LargeStarPropEntity.EMOJI = emojis[2851];
LargeStarPropEntity.WIDTH = 5;
LargeStarPropEntity.HEIGHT = 5;
LargeStarPropEntity.IMAGE_PATH = {
  PURPLE_BLINKING: [
    `${LargeStarPropEntity.PATH}/assets/images/purple-blinking/image-source-1.png`,
    `${LargeStarPropEntity.PATH}/assets/images/purple-blinking/image-source-2.png`,
    `${LargeStarPropEntity.PATH}/assets/images/purple-blinking/image-source-3.png`,
    `${LargeStarPropEntity.PATH}/assets/images/purple-blinking/image-source-2.png`
  ],
  RED_BLINKING: [
    `${LargeStarPropEntity.PATH}/assets/images/red-blinking/image-source-1.png`,
    `${LargeStarPropEntity.PATH}/assets/images/red-blinking/image-source-2.png`,
    `${LargeStarPropEntity.PATH}/assets/images/red-blinking/image-source-3.png`,
    `${LargeStarPropEntity.PATH}/assets/images/red-blinking/image-source-2.png`
  ],
  WHITE_BLINKING: [
    `${LargeStarPropEntity.PATH}/assets/images/white-blinking/image-source-1.png`,
    `${LargeStarPropEntity.PATH}/assets/images/white-blinking/image-source-2.png`,
    `${LargeStarPropEntity.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${LargeStarPropEntity.PATH}/assets/images/white-blinking/image-source-2.png`
  ]
};

module.exports = LargeStarPropEntity;
