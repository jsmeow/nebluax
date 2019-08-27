// const findEmoji = require('../../../util/emoji/emoji-finder');
const emojis = require('emoji.json/emoji-compact.json');

// Id emoji
const idEmoji = emojis[3493];

function getId({ name, emoji, uuid }) {
  return [`${emoji} ${name}`, `${idEmoji} ${uuid}`];
}

function log(log) {
  return {
    spwn({ creator, ...entity }) {
      const [_name, _uuid] = getId(entity);
      if (creator) {
        /* const [_cname] = getNameUuId(creator);
        log.warndrk(`${_name} spawned by ${_cname} ${_uuid}`);*/
      } else {
        log.warndrk(`spawned ${_name} ${_uuid}`);
      }
    },
    spwnchld({ children, ...entity }) {
      const [_name, _uuid] = getId(entity);
      const _msg = `${children.length} child entities`;
      log.teal(`${_name} created ${_msg} ${_uuid}`);
      /* console.groupCollapsed(
        children.map(({ name, emoji }) => `${name} ${emoji}`)
      );*/
    }
  };
}

module.exports = log;
