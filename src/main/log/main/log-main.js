const emojis = require('emoji.json/emoji-compact.json');

module.exports = function(logger) {
  const name = `${emojis[2793]} Nebulax`;
  return {
    run() {
      const msg = `Initializing ${name}`;
      logger.info(msg);
    },
    init: {
      success() {
        const msg = `${name} initialized`;
        logger.info(msg);
      },
      fail() {
        const msg = `${name} failed to initialize`;
        logger.info(msg);
      }
    }
  };
};
