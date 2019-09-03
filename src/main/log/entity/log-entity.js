const emojis = require('emoji.json/emoji-compact.json');

function getProps({ name, emoji, uuid, creator }) {
  return {
    _name: `${emoji} ${name}`,
    _uuid: `${emojis[3493]} ${uuid}`,
    _cname: creator ? `${creator.emoji} ${creator.name}` : ``,
    _cuuid: creator ? `${emojis[3493]} ${creator.uuid}` : ``
  };
}

module.exports = function(logger) {
  return {
    spawn(entity) {
      if (entity.log) {
        const { _name, _uuid, _cname, _cuuid } = getProps(entity);
        const msg = `${_name} has been spawned ${_uuid}`;

        if (entity.creator) {
          msg.concat(` by ${_cname} ${_cuuid}`);
          logger.teal(msg, entity);
        } else if (!entity.creator) {
          logger.teal(msg, entity);
        }
      }
    },
    spawnChildren({ children, ...entity }) {
      if (entity.log) {
        const { _uuid } = getProps(entity);
        const msg = `${_uuid} has ${children.length} child entities`;
        logger.teal(msg, { children });
      }
    }
  };
};
