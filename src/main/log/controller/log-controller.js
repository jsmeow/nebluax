const logCanvasController = require('./type/log-canvas-controller');
const logEntitiesController = require('./type/log-entities-controller');
const logKeyEventController = require('./type/log-key-event-controller');
const logLoopController = require('./type/log-loop-controller');
const logMasterController = require('./type/log-master-controller');
const logStateController = require('./type/log-state-controller');

module.exports = function(logger) {
  return {
    canvas: logCanvasController(logger),
    entities: logEntitiesController(logger),
    keyEvent: logKeyEventController(logger),
    loop: logLoopController(logger),
    master: logMasterController(logger),
    state: logStateController(logger)
  };
};
