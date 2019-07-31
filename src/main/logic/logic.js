const canvas = require('../canvas');
const keyHandler = require('../key-handler');
const state = require('../state');
const title = require('./title/title');
const game = require('./game/game');
const Player = require('../entity/player/player');
const Space = require('../entity/background/space');

// The application entities list.
// All entities have lifecycles inside this list.
const entities = [];

// The application user/player.
const player = new Player({ entities });
entities.push(player);

// Send the player to the key handler to handle user key events.
// Send the state to the key handler to handle state events.
// Add keydown and keyup event listeners.
keyHandler.addKeydownEventListener(player, state);
keyHandler.addKeyupEventListener(player, state);

// The space background.
// Will render regardless of application state.
const space = new Space({
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
});

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
      game.update(player, entities);
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
      game.render(player, entities);
    }
  }
}

module.exports = logic;
