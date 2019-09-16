const { fps } = require('../../../../../../../options');
const PhysicalEntity = require('../physical-entity');
const timers = require('../../../../../timers/entity-timers');
const update = require('../../../../../update/update-entity');
const emojis = require('emoji.json/emoji-compact.json');

function Explosive(args) {
  PhysicalEntity.call(this, args);

  // The arguments passed to the explosion created when the explosive is
  // detonated
  this.explosion = args.explosion;

  /** @override **/
  this.timers.image = timers.base.animation({
    entity: this,
    delay: fps * 0.5
  });

  /** @override **/
  this.onCollision = update.game.collision.entity.event.explosive;

  // Add the boundary collision to the entity update actions list
  this.actions.push(update.game.collision.boundary);
}

Explosive.prototype = Object.create(PhysicalEntity.prototype);

Explosive.PATH = `${PhysicalEntity.PATH}/explosive`;
Explosive.EMOJI = emojis[2831];
Explosive.EXPLOSION_X = 0;
Explosive.EXPLOSION_Y = 0;

module.exports = Explosive;
