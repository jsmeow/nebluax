const keyHandler = require('../key-handler');
const state = require('../state');
const title = require('./title/title');
const game = require('./game/game');
const factory = require('../entity/factory/factory-entity');

// The space background.
// Will update and render regardless of application state.
const space = factory.background.space.space();

// The game/application player/user.
// Const player = factory.ship.player();

// Add keydown and keyup event listeners.
// Send the player and state to the key handler to handle user key events.
// KeyHandler.addKeydownEventListener(player, state);
// KeyHandler.addKeyupEventListener(player, state);

// Application logic while the loop is running.
// The space entity will update and render regardless of application state.
function logic() {
  // Update the application.

  space.update();

  // Update the title.
  if (state.current === state.states.TITLE) {
    title.update();
  }

  // Update the game.
  if (state.current === state.states.GAME) {
    game.update();
  }

  // Render the application.

  space.render();

  // Render the title.
  if (state.current === state.states.TITLE) {
    title.render();
  }

  // Render the game.
  else if (state.current === state.states.GAME) {
    game.render(/* Player*/);
  }
}

module.exports = logic;
