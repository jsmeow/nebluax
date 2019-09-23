const { window } = require('../../../../../../options');
const CombatEntity = require('../combat-entity');
const timers = require('../../../../timers/entity-timers');
const update = require('../../../../update/update-entity');
const exception = require('../../../../../../exception/exception');
const emojis = require('emoji.json/emoji-compact.json');

function Shield(args) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      x: (args.parent.x + args.parent.width * 0.5) / window.scale,
      y: (args.parent.y + args.parent.height * 0.5) / window.scale,
      parent: args.parent || exception.entity.args.parent(),
      faction: args.parent.faction || exception.entity.args.faction(),
      health: args.health || Shield.HEALTH
    })
  );

  // Add the shield timer to the timer list
  this.timers.shield = timers.game.shield();

  // Add the entity shield position action to the entity update actions list
  this.actions.push(update.game.position.shield);
}

Shield.prototype = Object.create(CombatEntity.prototype);

Shield.PATH = `${CombatEntity.PATH}/shield`;
Shield.EMOJI = emojis[3215];
Shield.HEALTH = 1;

module.exports = Shield;
