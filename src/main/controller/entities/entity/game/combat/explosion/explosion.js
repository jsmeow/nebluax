const { fps } = require('../../../../../../options');
const CombatEntity = require('../combat-entity');
const timers = require('../../../../timers/entity-timers');
const enums = require('../../../../../../enums/enums');
const emojis = require('emoji.json/emoji-compact.json');

function Explosion(args) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      width: args.width || Explosion.WIDTH,
      height: args.height || Explosion.HEIGHT,
      imagePath: Explosion.IMAGE_PATH,
      faction: args.faction || Explosion.FACTION,
      invincible: Explosion.INVINCIBLE
    })
  );

  /** @override **/
  this.timers.image = timers.base.animation({
    delay: fps * 0.5,
    expire: () => {
      this.dispose = true;
    }
  });
}

Explosion.prototype = Object.create(CombatEntity.prototype);

Explosion.PATH = `${CombatEntity.PATH}/explosion`;
Explosion.EMOJI = emojis[142];
Explosion.WIDTH = 17;
Explosion.HEIGHT = 17;
Explosion.IMAGE_PATH = [
  `${Explosion.PATH}/assets/images/image-source-1.png`,
  `${Explosion.PATH}/assets/images/image-source-2.png`,
  `${Explosion.PATH}/assets/images/image-source-3.png`,
  `${Explosion.PATH}/assets/images/image-source-4.png`,
  `${Explosion.PATH}/assets/images/image-source-5.png`,
  `${Explosion.PATH}/assets/images/image-source-6.png`,
  `${Explosion.PATH}/assets/images/image-source-7.png`
];
Explosion.FACTION = enums.entity.faction.NONE;
Explosion.INVINCIBLE = true;

module.exports = Explosion;
