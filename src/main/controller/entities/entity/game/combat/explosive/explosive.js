const { fps } = require('../../../../../../options');
const CombatEntity = require('../combat-entity');
const Explosion = require('../explosion/explosion');
const timers = require('../../../../timers/entity-timers');
const update = require('../../../../update/update-entity');
const exception = require('../../../../../../exception/exception');

function Explosive({ explosion = {}, ...args }) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      parent: args.parent || exception.entity.args.parent(),
      faction: args.parent.faction || exception.entity.args.faction(),
      health: args.health || Explosive.HEALTH,
      disposeEvents: Explosive.DISPOSE_EVENTS,
      explosion: Object.assign(explosion, {
        width: explosion.width || Explosive.EXPLOSION_WIDTH,
        height: explosion.height || Explosive.EXPLOSION_HEIGHT,
        parent: args.parent,
        faction: args.parent.faction,
        attack: args.attack || Explosive.ATTACK
      })
    })
  );

  // The arguments passed to the explosion when the explosive is detonated
  this.explosion = args.explosion;

  // Define the entity collision event action
  this.onCollision = update.game.collision.event.explosive;

  /** @override **/
  this.timers.image = timers.base.animation({
    delay: Explosive.ANIMATION_DELAY
  });
}

Explosive.prototype = Object.create(CombatEntity.prototype);

Explosive.PATH = `${CombatEntity.PATH}/explosive`;
Explosive.ANIMATION_DELAY = fps * 0.5;
Explosive.HEALTH = 1;
Explosive.ATTACK = 3;
Explosive.DISPOSE_EVENTS = {
  collision: {
    boundary: true,
    enemyEntity: true
  }
};
Explosive.EXPLOSION_WIDTH = Explosion.WIDTH * 3;
Explosive.EXPLOSION_HEIGHT = Explosion.HEIGHT * 3;

module.exports = Explosive;
