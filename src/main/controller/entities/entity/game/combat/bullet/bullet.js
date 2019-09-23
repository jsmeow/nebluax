const { fps } = require('../../../../../../options');
const CombatEntity = require('../combat-entity');
const timers = require('../../../../timers/entity-timers');
const exception = require('../../../../../../exception/exception');
const emojis = require('emoji.json/emoji-compact.json');

function Bullet(args) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      width: args.width || Bullet.WIDTH,
      height: args.height || Bullet.HEIGHT,
      rotation: args.rotation || args.parent.rotation || Bullet.ROTATION,
      speed: args.speed || Bullet.SPEED,
      parent: args.parent || exception.entity.args.parent(),
      faction: args.parent.faction || exception.entity.args.faction(),
      invincible: Bullet.INVINCIBLE,
      attack: args.attack || Bullet.ATTACK,
      disposeEvents: Bullet.DISPOSE_EVENTS,
      log: false
    })
  );

  /** @override **/
  this.timers.animation = timers.base.animation({
    delay: Bullet.IMAGE_TIMER_DELAY
  });
}

Bullet.prototype = Object.create(CombatEntity.prototype);

Bullet.PATH = `${CombatEntity.PATH}/bullet`;
Bullet.EMOJI = emojis[2960];
Bullet.WIDTH = 3;
Bullet.HEIGHT = 5;
Bullet.ROTATION = 0;
Bullet.SPEED = 250;
Bullet.IMAGE_TIMER_DELAY = fps * 0.125;
Bullet.INVINCIBLE = true;
Bullet.ATTACK = 1;
Bullet.DISPOSE_EVENTS = {
  collision: {
    boundary: true,
    enemyEntity: true
  }
};

module.exports = Bullet;
