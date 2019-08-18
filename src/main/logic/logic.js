const { background } = require('../entities');
const keyHandler = require('../key-handler');
const state = require('../state');
const title = require('./title/title');
const game = require('./game/game');

// Add keydown and keyup event listeners
keyHandler.addKeydownEventListener();
keyHandler.addKeyupEventListener();

// Application logic while the loop is running.
// Update event is done first, then the render event.

function update() {
  // Update the background.
  background.update();

  // Update the title.
  if (state.current === state.states.TITLE) {
    title.update();
  }

  // Update the game.
  if (state.current === state.states.GAME) {
    game.update();
  }
}

function render() {
  // Render the background.
  background.render();

  // Render the title.
  if (state.current === state.states.TITLE) {
    title.render();
  }

  // Render the game.
  else if (state.current === state.states.GAME) {
    game.render();
  }
}

module.exports = {
  update,
  render
};
