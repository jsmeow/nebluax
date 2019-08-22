const { fps } = require('./options');
const logic = require('./logic/logic');

// The animation start frame timestamp
function timestamp() {
  if (window.performance && window.performance.now) {
    return window.performance.now();
  }

  return new Date().getTime();
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

  while (delta > step) {
    delta -= step;
    logic.update();
  }

  logic.render();

  last = now;

  window.requestAnimationFrame(() => {
    frame();
  });
}

// Start the application loop
function loop() {
  window.requestAnimationFrame(() => {
    frame();
  });
}

module.exports = loop;
