const { width, height, scale } = require('../options').window;
const EntitiesController = require('./type/entities/entities-controller');
const LoopController = require('./type/loop/loop-controller');
const StateController = require('./type/state/state-controller');
const CanvasController = require('./type/canvas/canvas-controller');
const log = require('../util/log');
const { whteHvyChckMrk } = require('../util/emoji');

function Controller() {
  log.info('initializing nebulax...');
  log.info(`window resolution set to ${width * scale}x${height * scale}`);

  // The application controllers
  const controllers = [
    EntitiesController,
    LoopController,
    StateController,
    CanvasController
  ];

  // Mixin the master controller context to the application controllers
  controllers.forEach(MixinController => this.mixin(MixinController));

  // Create the application controllers
  this.canvas = this.create(CanvasController);
  log.succ(`${whteHvyChckMrk} successfully created the canvas controller`);
  this.entities = this.create(EntitiesController);
  log.succ(`${whteHvyChckMrk} successfully created the entities controller`);
  this.loop = this.create(LoopController);
  log.succ(`${whteHvyChckMrk} successfully created the loop controller`);
  this.state = this.create(StateController);
  log.succ(`${whteHvyChckMrk} successfully created the state controller`);
}

Controller.prototype.mixin = function(NewController) {
  NewController.prototype.controllers = this;
};

Controller.prototype.create = function(NewController) {
  return new NewController();
};

// Run the application
Controller.prototype.run = function() {
  this.state.onchange(StateController.states.GAME);
  this.loop.start();
  const spaceBg = this.entities.factory.bg.space.bg();
  console.log(spaceBg);
};

module.exports = new Controller();
