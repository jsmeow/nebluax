const CombatEntity = require('../combat-entity');
const timers = require('../../../../timers/entity-timers');
const utils = require('../../../../../../utils/utils');

function PhysicalEntity(args) {
  CombatEntity.call(this, args);

  // Damage properties
  // If the entity is capable of being damaged and the damaged image path is
  // supplied, it gains a short invincibility time between hits and set the
  // standard image source to the damaged image source.
  // damaged - flags if the entity has been damaged
  // imagePathDamaged - the file path to the damaged image source
  // imageDamaged - the damaged image object
  this.damaged = args.damaged || false;
  this.imagePathDamaged = args.imagePathDamaged || null;
  this.imageDamaged = this.imagePathDamaged
    ? utils.entity.generate.imageSource(this.imagePathDamaged)
    : null;

  // Add the damaged timer to the timer list
  this.timers.damaged = timers.game.damaged({ entity: this });
}

PhysicalEntity.prototype = Object.create(CombatEntity.prototype);

PhysicalEntity.PATH = `${CombatEntity.PATH}/physical`;

module.exports = PhysicalEntity;
