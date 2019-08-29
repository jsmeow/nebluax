const enums = require('../../enum/enums');
const emojis = require('emoji.json/emoji-compact.json');

function log(logger) {
  const name = `${emojis[3480]} state`;

  return {
    init: {
      suc() {
        const msg = `Successfully created the ${name} controller`;
        logger.suc(msg);
      },
      fail() {
        const msg = `The ${name} controller was not created`;
        logger.err(msg);
      }
    },
    change(state) {
      const key = Object.keys(enums.STATE.STATES)[state];
      const msg = `The application ${name} has been set to ${key}`;
      logger.info(msg);
    }
  };
}

module.exports = log;
