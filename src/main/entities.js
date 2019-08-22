const EntityFactory = require('./entity/factory/entity-factory');

// The background entities list are always rendered first
const background = [];

// The display entities list consists of entities such as the title text. hud
// elements, etc.
const display = [];

// The game entities list consists of the entities that participate in the
// game such as the player, ships, etc. and are always rendered last
const game = [];

// Instantiate the application entities list
// The three-dimensional array holds the background, display, and the game
// entities list which make up all rendered elements of the application.
const list = [background, display, game];

// Instantiate the entity factory object with the entities list reference
const factory = new EntityFactory(list);

// Instantiate the application background entity
factory.background.space.space();

module.exports = {
  list,
  factory
};
