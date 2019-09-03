const entities = require('../../entities/entities-controller');
const enums = require('../../../enums/enums');

function update(dt) {
  Object.values(enums.controller.entities.type).forEach(type => {
    entities.setList[type].forEach((entity, idx) => {
      entity.update(idx, dt);
    });
  });
}

function render() {
  Object.values(enums.controller.entities.type).forEach(type => {
    entities.setList[type].forEach(entity => {
      entity.render();
    });
  });
}

module.exports = {
  update,
  render
};
