const loop = require('../loop/loop-controller');
const enums = require('../../enums/enums');
const log = require('../../log/log');

// The application state controller
function StateController() {
  log.controller.state.init.success();
}

// The change application state event action
StateController.prototype.change = function(state) {
  switch (state) {
    case enums.controller.state.states.TITLE:
      break;
    case enums.controller.state.states.MENU:
      break;
    case enums.controller.state.states.GAME:
      loop.onStateChange(state);
      break;
    default:
      throw new Error('InvalidStateException');
  }

  log.controller.state.change(state);
};

module.exports = new StateController();
