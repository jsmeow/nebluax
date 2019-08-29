const entities = require('../../entities/entities-controller');
const enums = require('../../../enum/enums');

// An application game frame
function gameFrame() {
  function update(dt) {
    Object.values(enums.ENTITIES.TYPE).forEach(type => {
      entities.setList[type].forEach((entity, idx) => {
        entity.update(idx, dt);
      });
    });
  }

  function render() {
    Object.values(enums.ENTITIES.TYPE).forEach(type => {
      entities.setList[type].forEach(entity => {
        entity.render();
      });
    });
  }

  return { update, render };
}

module.exports = gameFrame;
