const gameFrame = require('./frame/game-frame');
const enums = require('../../enum/enums');
const log = require('../../../log/log');

// The application loop controller
function LoopController() {
  // The last loop frame timestamp
  let last = Date.now();

  this.loop = () => {
    const now = Date.now();
    const dt = (now - last) / 1000.0;

    this.frame.update(dt);
    this.frame.render();

    last = now;
    window.requestAnimationFrame(this.loop);
  };

  log.ctrlr.loop.init.suc();
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
  log.ctrlr.loop.start();
};

// Stops the application loop
LoopController.prototype.stop = function() {
  window.cancelAnimationFrame(this.loop);
  log.ctrlr.loop.stop();
};

// The change frame function event action
LoopController.prototype.onChange = function(state) {
  switch (state) {
    case enums.STATE.STATES.TITLE:
      break;
    case enums.STATE.STATES.MENU:
      break;
    case enums.STATE.STATES.GAME:
      this.frame = gameFrame();
      break;
    default:
      throw new Error('InvalidStateException');
  }
};

module.exports = new LoopController();
