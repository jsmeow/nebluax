const PropEntity = require('../../prop-entity');
const emojis = require('emoji.json/emoji-compact.json');

function PlanetPropEntity(args) {
  PropEntity.call(
    this,
    Object.assign(args, {
      width: PlanetPropEntity.WIDTH,
      height: PlanetPropEntity.HEIGHT,
      imagePath: args.imagePath || PlanetPropEntity.IMAGE_PATH.PLANET1
    })
  );
}

PlanetPropEntity.prototype = Object.create(PropEntity.prototype);

PlanetPropEntity.PATH = `${PropEntity.PATH}/space/planet`;
PlanetPropEntity.EMOJI = emojis[2849];
PlanetPropEntity.WIDTH = 29;
PlanetPropEntity.HEIGHT = 29;
PlanetPropEntity.IMAGE_PATH = {
  PLANET1: `${PlanetPropEntity.PATH}/assets/images/planet-1/image-source.png`,
  PLANET2: `${PlanetPropEntity.PATH}/assets/images/planet-2/image-source.png`
};

module.exports = PlanetPropEntity;
