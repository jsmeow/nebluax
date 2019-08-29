const state = require('./type/state/state-controller');
const loop = require('./type/loop/loop-controller');
const entities = require('./type/entities/entities-controller');
const entityFctry = require('./type/entities/factory/entity-factory');
const enums = require('./enum/enums');
const log = require('../log/log');

function Controller() {
  log.ctrlr.master.init.suc();
  log.main.init.suc();
  state.onChange(enums.STATE.STATES.GAME);
  loop.start();
}

// Run the application controller
Controller.prototype.run = function() {
  console.log(entityFctry);
  const spaceBg = entityFctry.factories.bg.space.bg();
  const asteroid1 = entityFctry.factories.game.asteroid[1]();
  // console.log(factory);
  /* const spaceBg = entities.factory.bg.space.bg();
  console.log(entities.setList);*/
};

module.exports = new Controller();
