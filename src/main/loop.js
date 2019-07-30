const { fps } = require('./options');
const logic = require('./logic/logic');

// The animation start frame timestamp.
function timestamp() {
  return window.performance && window.performance.now
    ? window.performance.now()
    : new Date().getTime();
}

// The current frame datetime timestamp.
let now;

// The previous frame datetime timestamp.
let last = timestamp();

// The difference between the previous frame datetime timestamp and the current
// Frame datetime timestamp.
let delta;

// Depending on the collision detection scheme, fast moving objects can pass
// Through small objects, this can be mitigated if our fixed step is set
// Relative to our entities maximum speed and minimum size.
const step = 1 / fps;

// An update loop frame.
// Actions taken on an update loop frame depend on the application state.
function frame() {
  // Set the current frame datetime timestamp.
  now = timestamp();

  // Resolve the delta.
  // One additional note is that requestAnimationFrame might pause if our
  // Browser loses focus, resulting in a very, very large dt after it resumes.
  // We can workaround this by limiting the delta to one second
  delta = Math.min(1, (now - last) / 1000);

  // Perform work.
  while (delta > step) {
    delta -= step;

    // Update the application.
    logic({ step });
  }

  // Render the application.
  logic({ delta });

  // The current frame datetime timestamp becomes the previous frame datetime
  // Timestamp.
  last = now;

  // Perform the loop.
  window.requestAnimationFrame(() => {
    frame();
  });
}

// Initializer.
function init() {
  // Begin the application loop.
  frame();
}

module.exports = init;
