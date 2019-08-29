const options = require('./log-entity-options');
const emojis = require('emoji.json/emoji-compact.json');

function getProps({ name, emoji, uuid, creator }) {
  return {
    _name: `${emoji} ${name}`,
    _uuid: `${emojis[3493]} ${uuid}`,
    _cname: creator ? `${creator.emoji} ${creator.name}` : ``,
    _cuuid: creator ? `${emojis[3493]} ${creator.uuid}` : ``
  };
}

function log(logger) {
  return {
    spawn(entity) {
      const { _name, _uuid, _cname, _cuuid } = getProps(entity);
      const msg = `${_name} has been spawned ${_uuid}`;

      if (entity.creator && options.spawn.children) {
        msg.concat(` by ${_cname} ${_cuuid}`);
        logger.teal(msg, entity);
      } else if (!entity.creator) {
        logger.teal(msg, entity);
      }
    },
    children({ children, ...entity }) {
      const { _uuid } = getProps(entity);
      const msg = `${_uuid} has ${children.length} child entities`;
      logger.teal(msg, { children });
    }
  };
}

module.exports = log;
