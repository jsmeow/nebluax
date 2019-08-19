const EntityFactory = require('./entity/factory/entity-factory');

// The game/application entities list
// The three-dimensional array holds the background, display, and the game
// entities list.
const list = [[], [], []];

// Send the entities list to the new entity factory object.
const factory = new EntityFactory(list);

// The game/application default background entity
// Will update and render regardless of application state.
const background = factory.background.outerSpace.space.space();

// Swap the background and the background created entities in the entities list
// so that the background entity is always first.
// This is due to the fact the the background entity created entities are
// instantiated before the actual background entity.
// This also guarantees the correct update/render execution order.
list[0].splice(list[0].length - 1);
list[0].unshift(background);

// Implement the game/application player/user entity
// const player = factory.ship.player.player();

// Factory.ship.small.bowerbird({ faction: 'enemy', degrees: Math.PI });

// Swap the player and the background created entities in the entities list
// so that the player entity is always first.
// This is due to the fact the the background entity created entities are
// instantiated before the actual player entity.
// This also guarantees the correct update/render execution order.
// list.splice(list.length - 1);
// list.unshift(player);

module.exports = {
  list,
  factory,
  background
};
