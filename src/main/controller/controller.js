const state = require('./type/state/state-controller');
const loop = require('./type/loop/loop-controller');
const entities = require('./type/entities/entities-controller');
const keyEvent = require('./type/key-event/key-event-controller');
const enums = require('./enum/enums');
const log = require('../log/log');

function Controller() {
  log.ctrlr.master.init.suc();
  log.main.init.suc();
}

// Run the application controller
Controller.prototype.run = function() {
  state.onChange(enums.STATE.STATES.GAME);
  loop.start();
};

module.exports = new Controller();
