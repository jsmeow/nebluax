const PropEntity = require('../../prop-entity');
const emojis = require('emoji.json/emoji-compact.json');

function MediumStarPropEntity(args) {
  PropEntity.call(
    this,
    Object.assign(args, {
      width: MediumStarPropEntity.WIDTH,
      height: MediumStarPropEntity.HEIGHT,
      imagePath:
        args.imagePath || MediumStarPropEntity.IMAGE_PATH.WHITE_BLINKING
    })
  );
}

MediumStarPropEntity.prototype = Object.create(PropEntity.prototype);

MediumStarPropEntity.PATH = `${PropEntity.PATH}/space/medium-star`;
MediumStarPropEntity.EMOJI = emojis[2851];
MediumStarPropEntity.WIDTH = 3;
MediumStarPropEntity.HEIGHT = 3;
MediumStarPropEntity.IMAGE_PATH = {
  PURPLE_BLINKING: [
    `${MediumStarPropEntity.PATH}/assets/images/purple-blinking/image-source-1.png`,
    `${MediumStarPropEntity.PATH}/assets/images/purple-blinking/image-source-2.png`,
    `${MediumStarPropEntity.PATH}/assets/images/purple-blinking/image-source-3.png`,
    `${MediumStarPropEntity.PATH}/assets/images/purple-blinking/image-source-2.png`
  ],
  RED_BLINKING: [
    `${MediumStarPropEntity.PATH}/assets/images/red-blinking/image-source-1.png`,
    `${MediumStarPropEntity.PATH}/assets/images/red-blinking/image-source-2.png`,
    `${MediumStarPropEntity.PATH}/assets/images/red-blinking/image-source-3.png`,
    `${MediumStarPropEntity.PATH}/assets/images/red-blinking/image-source-2.png`
  ],
  WHITE_BLINKING: [
    `${MediumStarPropEntity.PATH}/assets/images/white-blinking/image-source-1.png`,
    `${MediumStarPropEntity.PATH}/assets/images/white-blinking/image-source-2.png`,
    `${MediumStarPropEntity.PATH}/assets/images/white-blinking/image-source-3.png`,
    `${MediumStarPropEntity.PATH}/assets/images/white-blinking/image-source-2.png`
  ]
};

module.exports = MediumStarPropEntity;
