const controller = require('./type/controller/log-controller-event');
const entity = require('./type/entity/log-entity-event');

const colors = Object.freeze({
  DANGER: '#ff4444',
  DANGER_DARK: '#CC0000',
  WARNING: '#ffbb33',
  WARNING_DARK: '#FF8800',
  SUCCESS: '#00C851',
  SUCCESS_DARK: '#007E33',
  INFO: '#33b5e5',
  INFO_DARK: '#0099CC',
  TEAL: '#2BBBAD',
  TEAL_DARK: '#00695c',
  BLUE: '#4285F4',
  BLUE_DARK: '#0d47a1',
  PURPLE: '#aa66cc',
  PURPLE_DARK: '#9933CC'
});

function getTimestamp() {
  return new Date().toString().slice(16, 24);
}

function logger(msg, color) {
  console.log(`%c[${getTimestamp()}] ${msg}`, `color: ${color};`);
}

const log = {
  err: msg => logger(msg, colors.DANGER),
  errdrk: msg => logger(msg, colors.DANGER_DARK),
  warn: msg => logger(msg, colors.WARNING),
  warndrk: msg => logger(msg, colors.WARNING_DARK),
  succ: msg => logger(msg, colors.SUCCESS),
  succdrk: msg => logger(msg, colors.SUCCESS_DARK),
  info: msg => logger(msg, colors.INFO),
  infodrk: msg => logger(msg, colors.INFO_DARK),
  teal: msg => logger(msg, colors.TEAL),
  tealdrk: msg => logger(msg, colors.TEAL_DARK),
  blue: msg => logger(msg, colors.BLUE),
  bluedrk: msg => logger(msg, colors.BLUE_DARK),
  purple: msg => logger(msg, colors.PURPLE),
  purpledrk: msg => logger(msg, colors.PURPLE_DARK)
};

module.exports = {
  ...log,
  cntrllr: { ...controller(log) },
  entity: { ...entity(log) }
};
