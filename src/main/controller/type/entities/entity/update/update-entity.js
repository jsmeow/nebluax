const updateEntityPosition = require('./type/update-entity-position');
const updateEntityCollision = require('./type/update-entity-collision');
const updateEntityTimers = require('./type/update-entity-timers');
const updateEntityAnimationIndex = require('./type/update-entity-animation-index');

// Update the entity position coordinates
function updatePosition(entity, dt) {
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

// Perform an application frame entity update
function update(entity, dt) {
  updatePosition(entity, dt);
  updateTimers(entity);
  updateAnimationIndex(entity);
}

module.exports = update;
module.exports.updatePosition = updatePosition;
module.exports.updateTimers = updateTimers;
module.exports.updateAnimationIndex = updateAnimationIndex;
module.exports.updateCollision = updateCollision;
