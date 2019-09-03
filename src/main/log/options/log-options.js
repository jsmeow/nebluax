const { width, height, scale } = require('../../options').window;
const emojis = require('emoji.json/emoji-compact.json');

module.exports = function(logger) {
  const name = `${emojis[3070]} window`;
  return {
    window: {
      res() {
        const [_width, _height] = [width, height].map(dim => dim * scale);
        const msg = `The ${name} resolution set to ${_width}x${_height}`;
        logger.info(msg);
      }
    }
  };
};
