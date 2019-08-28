const { width, height, scale } = require('../../options').window;
const emojis = require('emoji.json/emoji-compact.json');

function log(logger) {
  const name = `${emojis[3070]} window`;

  return {
    res() {
      const [_width, _height] = [width, height].map(dim => dim * scale);
      const msg = `The ${name} resolution set to ${_width}x${_height}`;
      logger.info(msg);
    }
  };
}

module.exports = log;
