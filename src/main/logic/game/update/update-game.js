const { list } = require('../../../entities');

function update() {
  list.forEach(entities => {
    entities.forEach(entity => {
      entity.update();
    });
  });
}

module.exports = update;
