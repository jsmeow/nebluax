const state = require('./type/state/state-controller');
const loop = require('./type/loop/loop-controller');
const entities = require('./type/entities/entities-controller');
const entityFctry = require('./type/entities/factory/entity-factory');
const enums = require('./enum/enums');
const log = require('../log/log');

// todo log controller event logger

function Controller() {
  log.cntrllr.initdone();
  state.onChange(enums.STATE.STATES.GAME);
  loop.start();
}

// Run the application controller
Controller.prototype.run = function() {
  const spaceBg = entityFctry.bg.space.bg();
  // console.log(factory);
  /* const spaceBg = entities.factory.bg.space.bg();
  console.log(entities.setList);*/
};

module.exports = new Controller();
