const { fps } = require('../../../../../../../options');
const InvulnerableEntity = require('../invulnerable-entity');
const timers = require('../../../../../timers/entity-timers');
const emojis = require('emoji.json/emoji-compact.json');

function Explosion(args) {
  InvulnerableEntity.call(
    this,
    Object.assign(args, {
      emoji: Explosion.EMOJI
    })
  );

  /** @override **/
  this.timers.image = timers.base.animation({
    entity: this,
    delay: fps * 0.5,
    expire: () => {
      this.dispose = true;
    }
  });
}

Explosion.prototype = Object.create(InvulnerableEntity.prototype);

Explosion.PATH = `${InvulnerableEntity.PATH}/explosion`;
Explosion.EMOJI = emojis[2831];

module.exports = Explosion;
