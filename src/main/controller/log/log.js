const logController = require('./type/controller/log-controller-event');
const logEntity = require('./type/entity/log-entity-event');
const { COLORS } = require('../enum/enums').LOG;

const infoLoggers = [
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
  ['blu', COLORS.BLUE],
  ['bludrk', COLORS.BLUE_DARK],
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
  infoLoggers.map(([key, color]) => [
    key,
    (msg, obj) => toConsole(msg, obj, color)
  ])
);

module.exports = {
  ...logger,
  cntrllr: logController(logger),
  entity: logEntity(logger)
};
