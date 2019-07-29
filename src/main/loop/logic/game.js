const Level1 = require('../../level/1/level1');

// The current level.
let level;

function update(entities) {
  if (!level) {
    level = new Level1(entities);
  }
  // Iterate through the entities list.
  entities.forEach((entity, idx) => {
    entity.update(entities, idx);
  });
}

function render(entities) {
  // Iterate through the entities list.
  entities.forEach(entity => {
    entity.render();
  });
}

module.exports = {
  update,
  render
};
