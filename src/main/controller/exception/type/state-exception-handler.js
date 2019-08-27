const log = require('../../../log/log');
const { crsMrk } = require('../../../util/emoji/emoji');

function StateExceptionHandler({ desc, name, val }) {
  desc && log.err(`${crsMrk} ${desc}`);
  this.name = name || 'StateException';
  this.message = val && `value : ${JSON.stringify(val)}`;
}
function InvalidStateException(val) {
  StateExceptionHandler.call(this, {
    desc: 'the entity state should match the one of the state type enum values',
    name: 'InvalidStateException',
    val
  });
}

module.exports = {
  InvalidStateException
};
