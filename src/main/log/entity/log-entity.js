const emojis = require('emoji.json/emoji-compact.json');

function getProps({ name, emoji, uuid, parent }) {
  return {
    _name: `${emoji} ${name}`,
    _uuid: `${emojis[3493]} ${uuid}`,
    _cname: parent ? `${parent.emoji} ${parent.name}` : ``,
    _cuuid: parent ? `${emojis[3493]} ${parent.uuid}` : ``
  };
}

module.exports = function(logger) {
  return {
    spawn(entity) {
      if (entity.log) {
        const { _name, _uuid, _cname, _cuuid } = getProps(entity);
        const msg = `${_name} has been spawned ${_uuid}`;

        if (entity.parent) {
          msg.concat(` by ${_cname} ${_cuuid}`);
          logger.teal(msg, entity);
        } else if (!entity.parent) {
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
