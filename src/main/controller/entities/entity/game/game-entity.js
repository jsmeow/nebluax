const Entity = require('../entity');
const update = require('../../update/update-entity');
const enums = require('../../../../enums/enums');

function GameEntity(args) {
  Entity.call(this, args);

  // The entity faction affiliation
  this.faction = args.faction || enums.entity.faction.NONE;

  // Status properties
  // Extending entities can add more status properties if needed.
  // alive - flags whether the entity health points > 0
  // invincible - flags if the entity takes damage on collision
  this.alive = args.alive || true;
  this.invincible = args.invincible || false;

  // Point properties
  // Extending entities can add more point properties if needed.
  // Default health is set to 1.
  this.health = args.health || 1;
  this.attack = args.attack || 0;
  this.value = args.value || 0;
  this.score = 0;

  // Add the entity collision and death action to the entity update actions
  // list
  this.actions.push(update.game.collision.entity);
  this.actions.push(update.game.death);
}

GameEntity.prototype = Object.create(Entity.prototype);

GameEntity.PATH = `${Entity.PATH}/game`;

module.exports = GameEntity;
