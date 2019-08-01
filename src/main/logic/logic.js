const keyHandler = require('../key-handler');
const state = require('../state');
const title = require('./title/title');
const game = require('./game/game');
const factory = require('../entity/entity-factory');

// The application entities list.
// All entities have lifecycles inside this list.
const entities = [];

// The application user/player.
const player = factory({ entities }).player();

// The space background.
// Will render regardless of application state.
const space = factory({ entities }).space();

// Send the player to the key handler to handle user key events.
// Send the state to the key handler to handle state events.
// Add keydown and keyup event listeners.
keyHandler.addKeydownEventListener(player, state);
keyHandler.addKeyupEventListener(player, state);

function logic({ step, delta }) {
  // Update the application.
  if (step) {
    // Update the space background.
    space.update();

    // Update the title.
    if (state.current === state.states.TITLE) {
      title.update();
    }

    // Update the game.
    if (state.current === state.states.GAME) {
      game.update(entities);
    }
  }

  // Render the application.
  if (delta) {
    // Render the space background.
    space.render();

    // Render the title.
    if (state.current === state.states.TITLE) {
      title.render();
    }

    // Render the game.
    else if (state.current === state.states.GAME) {
      game.render(entities, player);
    }
  }
}

module.exports = logic;
