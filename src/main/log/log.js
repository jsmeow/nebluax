const mainLog = require('./type/log-main');
const windowLog = require('./type/log-window');
const ctrlrLog = require('../controller/log/log-controller');
const COLORS = require('./log-colors');
// const findEmoji = require('../util/emoji-finder');
// findEmoji('moon');

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
  main: mainLog(logger),
  window: windowLog(logger),
  ctrlr: ctrlrLog(logger)
});
