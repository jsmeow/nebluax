const Entity = require('../../entity');
const update = require('../../update/update-entity');

function GameEntity(args) {
  Entity.call(this, args);

  // The entity faction affiliation
  this.faction = '';

  // Status properties
  // Extending entities can add more status properties if needed.
  // alive - flags whether the entity health points > 0
  // invincible - flags if the entity takes damage on collision
  this.alive = true;
  this.invincible = false;

  // Point properties
  // Extending entities can add more point properties if needed.
  this.health = 0;

  this.attack = 0;
  this.value = 0;
  this.score = 0;

  // Collision properties
  // collides - flag if the entity collides with other entities
  // collided - flag if the entity has collided with other entities
  // collidedList - list of entity indexes of entities that this entity has
  // already collided with
  this.collides = args.collides || false;
  this.collided = args.collided || false;
  this.collidedList = [];

  /** @override**/
  this.preUpdate = function(idx) {
    update.updateCollision(this, idx);
  };

  /** @override**/
  this.postUpdate = function() {
    !this.alive && Object.assign(this, { dispose: true });
  };
}

GameEntity.prototype = Object.create(Entity.prototype);

// Reset the entity collided flag before the next application frame update
GameEntity.prototype.reset = function() {
  this.collided && Object.assign(this, { collided: false });
};

GameEntity.PATH = `${Entity.PATH}/type/game`;

module.exports = GameEntity;
