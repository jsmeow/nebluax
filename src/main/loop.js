const { fps } = require('./options');
const logic = require('./logic/logic');

// The animation start frame timestamp
function timestamp() {
  return window.performance && window.performance.now
    ? window.performance.now()
    : new Date().getTime();
}

// The previous frame datetime timestamp
let last = timestamp();

// The difference between the previous frame datetime timestamp and the current
// Frame datetime timestamp.
let delta = 0;

// Depending on the collision detection scheme, fast moving objects can pass
// Through small objects, this can be mitigated if our fixed step is set
// Relative to our entities maximum speed and minimum size.
const step = 1 / fps;

// An update loop frame
// Actions taken on an update loop frame depend on the application state.
function frame() {
  // The current frame datetime timestamp
  const now = timestamp();

  // Resolve the delta
  // One additional note is that requestAnimationFrame might pause if our
  // Browser loses focus, resulting in a very, very large dt after it resumes.
  // We can workaround this by limiting the delta to one second
  delta = delta + Math.min(1, (now - last) / 1000);

  // Update the application
  while (delta > step) {
    delta -= step;
    logic.update();
  }

  // Render the application
  logic.render();

  // The current frame datetime timestamp becomes the previous frame datetime
  // Timestamp.
  last = now;

  // Perform the application loop
  window.requestAnimationFrame(() => {
    frame();
  });
}

// Start the application loop
function init() {
  window.requestAnimationFrame(() => {
    frame();
  });
}

module.exports = init;
