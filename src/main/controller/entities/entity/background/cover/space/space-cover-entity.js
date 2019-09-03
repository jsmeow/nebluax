const { window } = require('../../../../../../options');
const CoverEntity = require('../cover-entity');
const emojis = require('emoji.json/emoji-compact.json');

function SpaceCoverEntity(args) {
  CoverEntity.call(
    this,
    Object.assign(args, {
      x: SpaceCoverEntity.X,
      y: SpaceCoverEntity.Y,
      width: SpaceCoverEntity.WIDTH,
      height: SpaceCoverEntity.HEIGHT,
      speed: SpaceCoverEntity.SPEED,
      dy: SpaceCoverEntity.DY,
      imagePath: SpaceCoverEntity.IMAGE_PATH
    })
  );
}

SpaceCoverEntity.prototype = Object.create(CoverEntity.prototype);

SpaceCoverEntity.PATH = `${CoverEntity.PATH}/space`;
SpaceCoverEntity.EMOJI = emojis[2853];
SpaceCoverEntity.X = window.width * 0.5;
SpaceCoverEntity.Y = window.height * 0.5;
SpaceCoverEntity.WIDTH = window.width;
SpaceCoverEntity.HEIGHT = window.height;
SpaceCoverEntity.SPEED = 20;
SpaceCoverEntity.DY = 1;
SpaceCoverEntity.IMAGE_PATH = `${SpaceCoverEntity.PATH}/assets/images/image-source.png`;

module.exports = SpaceCoverEntity;
