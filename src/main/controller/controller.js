const state = require('./type/state/state-controller');
const loop = require('./type/loop/loop-controller');
const entities = require('./type/entities/entities-controller');
const enums = require('./enum/enums');
const log = require('../util/log');
const { sprkls } = require('../util/emoji');

function Controller() {
  state.onChange(enums.STATE.STATES.GAME);
  loop.start();

  log.info(`${sprkls} nebulax initialized`);
}

// Run the application controller
Controller.prototype.run = function() {
  const spaceBg = entities.factory.bg.space.bg();
  console.log(entities.setList);
};

module.exports = new Controller();
