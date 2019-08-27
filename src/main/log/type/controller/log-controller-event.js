const { width, height, scale } = require('../../../options').window;
const emojis = require('emoji.json/emoji-compact.json');
// const findEmoji = require('../../../util/emoji/emoji-finder');

function log(log) {
  return {
    init() {
      const [_width, _height] = [width, height].map(dim => dim * scale);
      log.info(`${emojis[2849]} initializing nebulax`);
      log.info(`${emojis[3070]} window resolution set to ${_width}x${_height}`);
    },
    initdone() {
      log.info(`${emojis[2849]} nebulax initialized`);
    }
  };
}

module.exports = log;
