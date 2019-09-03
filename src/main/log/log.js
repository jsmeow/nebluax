const logController = require('./controller/log-controller');
const logEntity = require('./entity/log-entity');
const logMain = require('./main/log-main');
const logOptions = require('./options/log-options');
const COLORS = require('./log-colors');

/* const findEmoji = require('../utils/utils');
findEmoji('game');*/

const loggers = [
  ['err', COLORS.DANGER],
  ['errdrk', COLORS.DANGER_DARK],
  ['wrn', COLORS.WARNING],
  ['wrndrk', COLORS.WARNING_DARK],
  ['suc', COLORS.SUCCESS],
  ['sucdrk', COLORS.SUCCESS_DARK],
  ['info', COLORS.INFO],
  ['infodrk', COLORS.INFO_DARK],
  ['teal', COLORS.TEAL],
  ['tealdrk', COLORS.TEAL_DARK],
  ['purp', COLORS.PURPLE],
  ['purpdrk', COLORS.PURPLE_DARK]
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

module.exports = Object.assign(logger, {
  controller: logController(logger),
  entity: logEntity(logger),
  main: logMain(logger),
  options: logOptions(logger)
});
