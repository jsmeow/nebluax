const updateGame = require('./update/update-game');
const renderGame = require('./render/render-game');

function update() {
  updateGame();
}

function render() {
  renderGame();
}

module.exports = {
  update,
  render
};
