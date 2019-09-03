const emojiFinder = require('./emoji/emoji-finder');
const entityUtils = require('./entity/entity-utils');

module.exports = {
  emoji: {
    finder: emojiFinder
  },
  entity: entityUtils
};
