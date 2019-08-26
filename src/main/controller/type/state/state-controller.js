const loop = require('../loop/loop-controller');
const enums = require('../../enum/enums');
const e = require('../../exception/exception-handler');
const log = require('../../../util/log');
const { whteHvyChckMrk } = require('../../../util/emoji');

// The application state controller
function StateController() {
  log.succ(`${whteHvyChckMrk} successfully created the state controller`);
}

// The change application state event action
StateController.prototype.onchange = function(state) {
  switch (state) {
    case enums.STATE.STATES.TITLE:
      break;
    case enums.STATE.STATES.MENU:
      break;
    case enums.STATE.STATES.GAME:
      loop.onchange(state);
      break;
    default:
      throw new e.state.InvalidStateException(state);
  }
};

module.exports = new StateController();
module.exports.STATES = StateController.STATES;
