const masterCtrlrLog = require('./type/log-master-controller');
const canvasCtrlrLog = require('./type/log-canvas-controller');
const stateCtrlrLog = require('./type/log-state-controller');
const loopCtrlrLog = require('./type/log-loop-controller');
const entitiesCtrlrLog = require('./type/log-entities-controller');

function log(logger) {
  return {
    master: masterCtrlrLog(logger),
    canvas: canvasCtrlrLog(logger),
    state: stateCtrlrLog(logger),
    loop: loopCtrlrLog(logger),
    entities: entitiesCtrlrLog(logger)
  };
}

module.exports = log;
