const loop = require('../loop/loop-controller');
const enums = require('../../enum/enums');
const e = require('../../exception/exception-handler');
const log = require('../../log/log');

// The application state controller
function StateController() {
  log.cntrllr.ste.initsuc();
}

// The change application state event action
StateController.prototype.onChange = function(state) {
  switch (state) {
    case enums.STATE.STATES.TITLE:
      break;
    case enums.STATE.STATES.MENU:
      break;
    case enums.STATE.STATES.GAME:
      loop.onChange(state);
      break;
    default:
      throw new e.state.InvalidStateException(state);
  }
};

module.exports = new StateController();
module.exports.STATES = StateController.STATES;
