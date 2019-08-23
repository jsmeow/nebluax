const EntityFactory = require('./entity/factory/entity-factory');

// The background entities list are always rendered first
const bg = [];

// The display entities list consists of entities such as the title text. hud
// elements, etc.
const disp = [];

// The game entities list consists of the entities that participate in the
// game such as the player, ships, etc. and are always rendered last
const game = [];

// Instantiate the application entities list
// The three-dimensional array holds the background, display, and the game
// entities list which make up all rendered elements of the application.
const list = [bg, disp, game];

// Instantiate the entity factory object with the entities list reference
const factory = new EntityFactory(list);

// Instantiate the application background entity
factory.bg.space.bg();
factory.game.asteroid.asteroid1();

console.log(list);

module.exports = {
  list,
  factory
};
