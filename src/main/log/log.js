const logController = require('./controller/log-controller');
const logEntity = require('./entity/log-entity');
const logMain = require('./main/log-main');
const logOptions = require('./options/log-options');
const COLORS = require('./log-colors');

/* const findEmoji = require('../utils/emoji/emoji-finder');
findEmoji('shield');*/

const loggers = [
  ['error', COLORS.DANGER],
  ['errorDark', COLORS.DANGER_DARK],
  ['warn', COLORS.WARNING],
  ['warndrk', COLORS.WARNING_DARK],
  ['success', COLORS.SUCCESS],
  ['successDark', COLORS.SUCCESS_DARK],
  ['info', COLORS.INFO],
  ['infoDark', COLORS.INFO_DARK],
  ['teal', COLORS.TEAL],
  ['tealDark', COLORS.TEAL_DARK],
  ['purple', COLORS.PURPLE],
  ['purpleDark', COLORS.PURPLE_DARK]
];

function toConsole(msg, obj, color) {
  const timestamp = new Date().toString().slice(16, 24);
  const args = [`%c[${timestamp}] ${msg}`, `color:${color};`];
  obj && args.push(obj);
  console.info(...args);
}

const logger = Object.fromEntries(
  loggers.map(([key, color]) => [key, (msg, obj) => toConsole(msg, obj, color)])
);

module.exports = {
  controller: logController(logger),
  entity: logEntity(logger),
  main: logMain(logger),
  options: logOptions(logger)
};
module.exports.error = logger.error;
module.exports.success = logger.success;
module.exports.teal = logger.teal;
