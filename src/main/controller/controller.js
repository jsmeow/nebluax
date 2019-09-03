const state = require('./state/state-controller');
const loop = require('./loop/loop-controller');
const entities = require('./entities/entities-controller');
const keyEvent = require('./key-event/key-event-controller');
const enums = require('../enums/enums');
const log = require('../log/log');

function Controller() {
  log.controller.master.init.suc();
  log.main.init.suc();
}

// Run the application controller
Controller.prototype.run = function() {
  state.onChange(enums.controller.state.states.GAME);
  loop.start();
};

module.exports = new Controller();
