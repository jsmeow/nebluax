const title = require('../states/title');
const game = require('../states/game');

function render(state) {
  // Render the title.
  if (state.current === state.states.TITLE) {
    title.render();
  }
  // Render the game.
  else if (state.current === state.states.GAME) {
    game.render();
  }
}

module.exports = render;
