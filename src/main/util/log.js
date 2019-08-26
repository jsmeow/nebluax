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

function err(msg) {
  logger(msg, colors.DANGER);
}

function warn(msg) {
  logger(msg, colors.WARNING);
}

function succ(msg) {
  logger(msg, colors.SUCCESS);
}

function info(msg) {
  logger(msg, colors.INFO);
}

function spawn(msg) {
  logger(msg, colors.WARNING_DARK);
}

function misc(msg) {
  logger(msg, colors.TEAL);
}

module.exports = {
  err,
  warn,
  succ,
  info,
  spawn,
  misc
};
