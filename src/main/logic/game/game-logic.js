const entities = require('../../entities');

function update() {
  entities.list[0].forEach((entity, index) => {
    entity.update(index);
  });

  entities.list[1].forEach((entity, index) => {
    entity.update(index);
  });

  entities.list[2].forEach((entity, index) => {
    entity.update(index);
  });
}

function render() {
  entities.list[0].forEach((entity, index) => {
    entity.render(index);
  });

  entities.list[1].forEach((entity, index) => {
    entity.render(index);
  });

  entities.list[2].forEach((entity, index) => {
    entity.render(index);
  });
}

module.exports = {
  update,
  render
};
