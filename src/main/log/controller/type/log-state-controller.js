const enums = require('../../../enums/enums');
const emojis = require('emoji.json/emoji-compact.json');

module.exports = function(logger) {
  const name = `${emojis[3480]} state`;
  return {
    init: {
      success() {
        const msg = `Successfully created the ${name} controller`;
        logger.success(msg);
      },
      fail() {
        const msg = `The ${name} controller was not created`;
        logger.error(msg);
      }
    },
    change(state) {
      const key = Object.keys(enums.controller.state.states)[state];
      const msg = `The application ${name} has been set to ${key}`;
      logger.info(msg);
    }
  };
};
