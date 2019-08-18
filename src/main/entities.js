const EntityFactory = require('./entity/factory/entity-factory');

// The game/application entities list.
// All entities have lifecycles inside this list.
const list = [];

// Send the entities list to the new entity factory object.
const factory = new EntityFactory(list);

// The game/application default background entity
// Will update and render regardless of application state.
// Will not be part of the entities list, since it does not actively
// Participate or interact with other entities in the game.
const background = factory.background.space.space();

// Implement the game/application player/user entity
factory.ship.small.player();

factory.ship.small.bowerbird({ faction: 'enemy', degrees: Math.PI });

// Swap the player and the player created entities in the entities list so
// That the player entity is always first.
// This is due to the fact the the player created entities are created before
// The actual player entity.
[list[0], list[1]] = [list[1], list[0]];

module.exports = {
  list,
  factory,
  background
};
