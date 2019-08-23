const logic = require('./logic/logic');

// An application loop frame
function frame() {
  window.requestAnimationFrame(frame);
  logic.update();
  logic.render();
}

// Starts the application loop
function start() {
  window.requestAnimationFrame(frame);
}

// Stops the application loop
function stop() {
  window.cancelAnimationFrame(frame);
}

module.exports = {
  start,
  stop
};
