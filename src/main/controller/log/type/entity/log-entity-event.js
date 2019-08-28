const { spawnChildren } = require('./log-entity-options');
const emojis = require('emoji.json/emoji-compact.json');

function getProps({ name, emoji, uuid, creator }) {
  return {
    _name: `${emoji} ${name}`,
    _uuid: `${emojis[3493]} ${uuid}`,
    _cname: creator ? `${creator.emoji} ${creator.name}` : null,
    _cuuid: creator ? `${emojis[3493]} ${creator.uuid}` : null
  };
}

function log(log) {
  return {
    spwn(entity) {
      const { _name, _uuid, _cname, _cuuid } = getProps(entity);
      const msg = `${_name} has been spawned with ${_uuid}`;
      spawnChildren && entity.creator && msg.concat(` by ${_cname} ${_cuuid}`);
      !entity.creator && log.purp(msg, entity);
    },
    spwnchld({ children, ...entity }) {
      const { _uuid } = getProps(entity);
      const msg = `${_uuid} created ${children.length} child entities`;
      log.purp(msg, { children });
    }
  };
}

module.exports = log;
