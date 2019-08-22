const logic = require('./logic/logic');

// An update loop frame
// Actions taken on an update loop frame depend on the application state.
function frame() {
  window.requestAnimationFrame(frame);
  logic.update();
  logic.render();
}

// Start the application loop
function loop() {
  window.requestAnimationFrame(frame);
}

module.exports = loop;
