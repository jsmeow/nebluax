const canvas = require('../canvas');
const state = require('./state');
const update = require('./logic/update');
const render = require('./logic/render');
const Space = require('../entities/background/space');

// The space background.
// Will render regardless of application state.
const space = new Space({
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
});

function logic({ step, delta }) {
  // Update the space background.
  space.update();
  if (step) {
    // Perform an application update.
    update(state);
  }
  if (delta) {
    // Render the space background.
    space.render();
    // Perform an application render.
    render(state);
  }
}

module.exports = logic;
