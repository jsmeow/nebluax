const updateTitle = require('./update/update-title');
const renderTitle = require('./render/render-title');

function update() {
  updateTitle();
}

function render() {
  renderTitle();
}

module.exports = {
  update,
  render
};
