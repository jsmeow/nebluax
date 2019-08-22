const { list } = require('../../../entities');

function update() {
  list.forEach(entities => {
    entities.forEach((entity, index) => {
      entity.update(index);
    });
  });
}

module.exports = update;
