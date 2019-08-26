const StateController = require('../state/state-controller');
const gameFrame = require('./frame/game-frame');
const e = require('../../../exception/exception-handler');

// The application loop controller
function LoopController() {
  // The frame functions to execute on an application frame
  const game = gameFrame(this.controllers.entities);

  // The frame function to execute will depend on the application state
  let frame = null;

  // The application loop
  function loop() {
    window.requestAnimationFrame(loop);
    frame[0]();
    frame[1]();
  }

  // Starts the application loop
  this.start = function() {
    window.requestAnimationFrame(loop);
  };

  // Stops the application loop
  this.stop = function() {
    window.cancelAnimationFrame(loop);
  };

  // The change frame function event action
  this.onchange = function() {
    switch (this.controllers.state.current) {
      case StateController.states.TITLE:
        break;
      case StateController.states.MENU:
        break;
      case StateController.states.GAME:
        frame = game;
        break;
      default:
        throw new e.state.InvalidStateException(this.controllers.state.current);
    }
  };
}

module.exports = LoopController;
