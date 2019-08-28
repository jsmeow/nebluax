const entities = require('../../entities/entities-controller');
const enums = require('../../../enum/enums');

// An application game frame
function gameFrame() {
  function update() {
    Object.values(enums.ENTITIES.TYPE).forEach(type => {
      entities.setList[type].forEach((entity, index) => {
        entity.update(index);
      });
    });
  }

  function render() {
    Object.values(enums.ENTITIES.TYPE).forEach(type => {
      entities.setList[type].forEach((entity, index) => {
        entity.render(index);
      });
    });
  }

  return { update, render };
}

module.exports = gameFrame;
