const title = require('../states/title');
const game = require('../states/game');

function update(state) {
  if (state.current === state.states.TITLE) {
    title.update();
  } else if (state.current === state.states.GAME) {
    game.update();
  }
}

module.exports = update;
