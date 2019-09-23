const GameEntity = require('../game-entity');
const timers = require('../../../timers/entity-timers');
const utils = require('../../../../../utils/utils');

function CombatEntity(args) {
  GameEntity.call(this, args);

  // Damage properties
  // If the entity is capable of being damaged, it gains a short invincibility
  // time between hits and set the standard image source to the damaged image
  // source.
  // damages - flags if the entity can be been damaged
  // damaged - flags if the entity has been damaged
  // imagePathDamaged - the file path to the damaged image source
  // imageDamaged - the damaged image object
  this.damages = args.damages || CombatEntity.DAMAGES;
  this.damaged = CombatEntity.DAMAGED;
  this.imagePathDamaged = args.imagePathDamaged || null;
  this.imageDamaged =
    this.imagePathDamaged &&
    utils.entity.generate.imageSource(this.imagePathDamaged);

  // Add the damaged timer to the timer list
  this.timers.damaged = timers.game.damaged();

  // Kill information
  // kills - The number of entities this entity has defeated.
  // killer - The reference to the entity that has defeated this entity.
  this.kills = CombatEntity.KILLS;
  this.killerEntity = CombatEntity.KILLER_ENTITY;
}

CombatEntity.prototype = Object.create(GameEntity.prototype);

CombatEntity.PATH = `${GameEntity.PATH}/combat`;
CombatEntity.DAMAGES = false;
CombatEntity.DAMAGED = false;
CombatEntity.KILLS = 0;
CombatEntity.KILLER_ENTITY = null;

module.exports = CombatEntity;
