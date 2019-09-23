const emojis = require('emoji.json/emoji-compact.json');

module.exports = function(logger) {
  const name = `${emojis[2799]} loop`;
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
    start() {
      const msg = `The application ${name} has been started`;
      logger.info(msg);
    },
    stop() {
      const msg = `The application ${name} has been stopped`;
      logger.info(msg);
    }
  };
};
