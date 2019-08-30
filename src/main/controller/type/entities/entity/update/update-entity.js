const updateEntityPosition = require('./type/update-entity-position');
const updateEntityTimers = require('./type/update-entity-timers');
const updateEntityAnimationIndex = require('./type/update-entity-animation-index');
const updateEntityCollision = require('./type/update-entity-collision');

// Update the entity position coordinates
function updatePosition(entity, _, dt) {
  updateEntityPosition(entity, dt);
}

// Update the entity timers
function updateTimers(entity) {
  updateEntityTimers(entity);
}

// Update the image index to render
function updateAnimationIndex(entity) {
  updateEntityAnimationIndex(entity);
}

// Update and perform collision action if collision is asserted
function updateCollision(entity, idx) {
  entity.collides && updateEntityCollision(entity, idx);
}

function update(entity, idx, dt) {
  entity.actions.forEach(action => action(entity, idx, dt));
}

module.exports = update;
module.exports.position = updatePosition;
module.exports.timers = updateTimers;
module.exports.animIndex = updateAnimationIndex;
module.exports.collision = updateCollision;
