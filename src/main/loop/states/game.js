const Narrowbill = require('../../entities/ships/narrowbill/Narrowbill');

// The application entities list.
// All entities have lifecycles from creation to disposal inside this list.
const entities = [
  new Narrowbill({ x: 50, y: 50, width: 150, height: 150, faction: 0 })
];

// Update action.
function update() {
  // Iterate through the entities list.
  entities.forEach((entity, idx) => {
    entity.update(entities, idx);
  });
}

// Render action.
function render() {
  // Iterate through the entities list.
  entities.forEach(entity => {
    entity.render();
  });
}

module.exports.update = update;
module.exports.render = render;
