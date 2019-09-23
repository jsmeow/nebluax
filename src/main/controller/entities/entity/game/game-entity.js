const Entity = require('../entity');
const update = require('../../update/update-entity');
const enums = require('../../../../enums/enums');

function GameEntity(args) {
  Entity.call(this, args);

  // The entity faction affiliation
  this.faction = args.faction || GameEntity.FACTION;

  // Status properties
  // Extending entities can add more status properties if needed.
  // alive - flags whether the entity health points > 0.
  // invincible - flags if the entity takes damage on collision.
  // disposable - flags if the entity will be disposed on collision or if out
  // of bounds.
  this.alive = args.alive || GameEntity.ALIVE;
  this.invincible = args.invincible || GameEntity.INVINCIBLE;

  // Point properties
  // Extending entities can add more point properties if needed.
  // Default health is set to 1.
  this.health = args.health || GameEntity.HEALTH;
  this.attack = args.attack || GameEntity.ATTACK;
  this.value = args.value || GameEntity.VALUE;
  this.score = args.score || GameEntity.SCORE;

  // Dispose condition object containing flags of dispose events
  // Extending entities can add more flags if needed.
  this.disposeEvents = {
    get collision() {
      const disposeEvents = args.disposeEvents && args.disposeEvents.collision;
      return {
        boundary: disposeEvents ? disposeEvents.boundary : false,
        alliedEntity: disposeEvents ? disposeEvents.alliedEntity : false,
        enemyEntity: disposeEvents ? disposeEvents.enemyEntity : false
      };
    }
  };

  // Add the entity collision and death action to the entity update actions
  // list
  this.actions.push(update.game.collision, update.game.death);
}

GameEntity.prototype = Object.create(Entity.prototype);

GameEntity.PATH = `${Entity.PATH}/game`;
GameEntity.FACTION = enums.entity.faction.NEUTRAL;
GameEntity.ALIVE = true;
GameEntity.INVINCIBLE = false;
GameEntity.HEALTH = 1;
GameEntity.ATTACK = 0;
GameEntity.VALUE = 0;
GameEntity.SCORE = 0;

module.exports = GameEntity;
