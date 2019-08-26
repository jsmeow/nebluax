const gameFrame = require('./frame/game-frame');
const enums = require('../../enum/enums');
const e = require('../../exception/exception-handler');
const log = require('../../../util/log');
const { whteHvyChckMrk } = require('../../../util/emoji');

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

  log.succ(`${whteHvyChckMrk} successfully created the loop controller`);
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
      throw new e.state.InvalidStateException(state);
  }
};

module.exports = new LoopController();
