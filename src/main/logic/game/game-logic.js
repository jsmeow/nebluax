const { list } = require('../../entities');

function update() {
  list.forEach(entities => {
    entities.forEach((entity, index) => {
      entity.update(index);
    });
  });
}

function render() {
  list.forEach(entities => {
    entities.forEach(entity => {
      entity.render();
    });
  });
}

module.exports = {
  update,
  render
};
