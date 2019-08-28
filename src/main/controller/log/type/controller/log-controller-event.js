const { width, height, scale } = require('../../../../options').window;
const emojis = require('emoji.json/emoji-compact.json');
const findEmoji = require('../../../../util/emoji/emoji-finder');

// findEmoji('knob');

function log(log) {
  const sucInitMsg = ['Successfully created the', 'controller'];

  return {
    cnvs: {
      initsuc() {
        const msg = `${sucInitMsg[0]} canvas ${sucInitMsg[1]}`;
        log.suc(`${emojis[2981]} ${msg}`);
      },
      wndwres() {
        const [_width, _height] = [width, height].map(dim => dim * scale);
        const resStr = `${_width}x${_height}`;
        log.suc(`${emojis[3070]} Window resolution set to ${resStr}`);
      }
    },
    ents: {
      initsuc() {
        const msg = `${sucInitMsg[0]} entities ${sucInitMsg[1]}`;
        log.suc(`${emojis[103]} ${msg}`);
      }
    },
    loop: {
      initsuc() {
        const msg = `${sucInitMsg[0]} loop ${sucInitMsg[1]}`;
        log.suc(`${emojis[3367]} ${msg}`);
      }
    },
    main: {
      init() {
        log.info(`${emojis[2849]} Initializing nebulax`);
      },

      initsuc() {
        log.info(`${emojis[2849]} Nebulax initialized`);
      }
    },
    ste: {
      initsuc() {
        const msg = `${sucInitMsg[0]} state ${sucInitMsg[1]}`;
        log.suc(`${emojis[3048]} ${msg}`);
      }
    }
  };
}

module.exports = log;
