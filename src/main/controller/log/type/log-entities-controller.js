const entityLog = require('../../type/entities/entity/log/log-entity');
const emojis = require('emoji.json/emoji-compact.json');

function log(logger) {
  const name = `${emojis[103]} entities`;

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
    entity: entityLog(logger)
  };
}

module.exports = log;
