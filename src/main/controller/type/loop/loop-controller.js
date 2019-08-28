const gameFrame = require('./frame/game-frame');
const enums = require('../../enum/enums');
const log = require('../../../log/log');

// The application loop controller
function LoopController() {
  // The frame function to execute will depend on the application state
  this.frame = null;

  // The application loop
  this.loop = () => {
    window.requestAnimationFrame(this.loop);
    this.frame.update();
    this.frame.render();
  };

  log.ctrlr.loop.init.suc();
}

// Starts the application loop
LoopController.prototype.start = function() {
  window.requestAnimationFrame(this.loop);
};

// Stops the application loop
LoopController.prototype.stop = function() {
  window.cancelAnimationFrame(this.loop);
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
