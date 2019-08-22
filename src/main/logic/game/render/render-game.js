const { list } = require('../../../entities');

function render() {
  list.forEach(entities => {
    entities.forEach(entity => {
      entity.render();
    });
  });
}

module.exports = render;
