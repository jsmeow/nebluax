const gameFrame = require('./frame/game-frame');
const enums = require('../../enums/enums');
const log = require('../../log/log');

// The application loop controller
function LoopController() {
  // The last loop frame timestamp
  let last = Date.now();

  // The main loop method
  // The delta time will be used to smooth out position animations.
  this.loop = () => {
    const now = Date.now();
    const dt = (now - last) / 1000.0;

    this.frame.update(dt);
    this.frame.render();

    last = now;
    window.requestAnimationFrame(this.loop);
  };

  log.controller.loop.init.success();
}

// Get a timestamp at the current time
LoopController.prototype.timestamp = function() {
  return window.performance && window.performance.now
    ? window.performance.now()
    : new Date().getTime();
};

// Starts the application loop
LoopController.prototype.start = function() {
  window.requestAnimationFrame(this.loop);
  log.controller.loop.start();
};

// Stops the application loop
LoopController.prototype.stop = function() {
  window.cancelAnimationFrame(this.loop);
  log.controller.loop.stop();
};

// The change frame function on change state event
LoopController.prototype.onStateChange = function(state) {
  switch (state) {
    case enums.controller.state.states.TITLE:
      break;
    case enums.controller.state.states.MENU:
      break;
    case enums.controller.state.states.GAME:
      this.frame = gameFrame;
      break;
    default:
      throw new Error('InvalidStateException');
  }
};

module.exports = new LoopController();
