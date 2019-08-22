const { fps } = require('./options');
const logic = require('./logic/logic');

// The animation start frame timestamp
function timestamp() {
  return window.performance.now();
}

// The previous frame datetime timestamp
const last = timestamp();

// The difference between the previous frame datetime timestamp and the current
// Frame datetime timestamp.
const delta = 0;

// Depending on the collision detection scheme, fast moving objects can pass
// Through small objects, this can be mitigated if our fixed step is set
// Relative to our entities maximum speed and minimum size.
const step = 1 / fps;

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
