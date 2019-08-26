const { width, height, scale } = require('../options').window;
const EntitiesController = require('./type/entities/entities-controller');
const LoopController = require('./type/loop/loop-controller');
const StateController = require('./type/state/state-controller');
const CanvasController = require('./type/canvas/canvas-controller');
const log = require('../util/log');
const { dsktpCmptr, sprkls, whteHvyChckMrk } = require('../util/emoji');

function Controller() {
  log.info(`${sprkls} initializing nebulax`);
  log.info(
    `${dsktpCmptr} window resolution set to ${width * scale}x${height * scale}`
  );

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

  log.info(`${sprkls} nebulax initialized`);
}

// Mixin the application controllers into the child controllers
Controller.prototype.mixin = function(NewController) {
  NewController.prototype.controllers = this;
};

// Create the application child controllers
Controller.prototype.create = function(ChildController) {
  return new ChildController();
};

// Run the application controller
Controller.prototype.run = function() {
  this.state.onchange(StateController.states.GAME);
  this.loop.start();
  console.log(this.entities.factory.bg.space.bg());
};

module.exports = new Controller();
