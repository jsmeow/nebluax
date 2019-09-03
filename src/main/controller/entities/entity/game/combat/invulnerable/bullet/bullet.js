const { fps } = require('../../../../../../../options');
const InvulnerableEntity = require('../invulnerable-entity');
const timers = require('../../../../../timers/entity-timers');
const update = require('../../../../../update/update-entity');
const emojis = require('emoji.json/emoji-compact.json');

function Bullet(args) {
  InvulnerableEntity.call(
    this,
    Object.assign(args, {
      width: Bullet.WIDTH,
      height: Bullet.HEIGHT,
      speed: args.speed || Bullet.SPEED,
      attack: args.attack || args.creator ? args.creator.attack : Bullet.ATTACK,
      log: false
    })
  );

  /** @override **/
  this.timers.animation = timers.base.animation({
    entity: this,
    delay: Bullet.IMAGE_TIMER_DELAY
  });

  /** @override **/
  this.onCollision = update.game.collision.entity.event.bullet;

  // Add the boundary collision to the entity update actions list
  this.actions.push(update.game.collision.boundary);
}

Bullet.prototype = Object.create(InvulnerableEntity.prototype);

Bullet.PATH = `${InvulnerableEntity.PATH}/bullet`;
Bullet.EMOJI = emojis[2960];
Bullet.WIDTH = 3;
Bullet.HEIGHT = 5;
Bullet.SPEED = 250;
Bullet.IMAGE_TIMER_DELAY = fps * 0.125;
Bullet.ATTACK = 1;

module.exports = Bullet;
