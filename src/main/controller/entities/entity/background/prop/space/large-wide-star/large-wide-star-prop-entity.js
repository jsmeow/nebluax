const PropEntity = require('../../prop-entity');
const emojis = require('emoji.json/emoji-compact.json');

function LargeWideStarPropEntity(args) {
  PropEntity.call(
    this,
    Object.assign(args, {
      width: LargeWideStarPropEntity.WIDTH,
      height: LargeWideStarPropEntity.HEIGHT,
      imagePath: args.imagePath || LargeWideStarPropEntity.IMAGE_PATH.WHITE
    })
  );
}

LargeWideStarPropEntity.prototype = Object.create(PropEntity.prototype);

LargeWideStarPropEntity.PATH = `${PropEntity.PATH}/space/large-wide-star`;
LargeWideStarPropEntity.EMOJI = emojis[2851];
LargeWideStarPropEntity.WIDTH = 13;
LargeWideStarPropEntity.HEIGHT = 9;
LargeWideStarPropEntity.IMAGE_PATH = {
  PURPLE: `${LargeWideStarPropEntity.PATH}/assets/images/purple/image-source.png`,
  RED: `${LargeWideStarPropEntity.PATH}/assets/images/red/image-source.png`,
  WHITE: `${LargeWideStarPropEntity.PATH}/assets/images/white/image-source.png`
};

module.exports = LargeWideStarPropEntity;
