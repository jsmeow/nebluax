const state = require('../state');
const title = require('./title/title-logic');
const game = require('./game/game-logic');

function update() {
  if (state.current === state.keys.title) {
    title.update();
  }

  if (state.current === state.keys.game) {
    game.update();
  }
}

function render() {
  if (state.current === state.keys.title) {
    title.render();
  }

  if (state.current === state.keys.game) {
    game.render();
  }
}

module.exports = {
  update,
  render
};
