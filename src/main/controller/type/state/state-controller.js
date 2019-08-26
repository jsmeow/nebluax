const e = require('../../../exception/exception-handler');

// The application state controller
function StateController() {
  // The current application state
  this.current = null;
}

// The application states enum
StateController.states = Object.freeze({
  TITLE: 'TITLE',
  MENU: 'MENU',
  GAME: 'GAME'
});

// The change application state event action
StateController.prototype.onchange = function(state) {
  switch (state) {
    case StateController.states.TITLE:
      break;
    case StateController.states.MENU:
      break;
    case StateController.states.GAME:
      this.current = StateController.states.GAME;
      this.controllers.loop.onchange();
      break;
    default:
      throw new e.state.InvalidStateException(state);
  }
};

module.exports = StateController;
