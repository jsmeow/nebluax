const updatePosition = require('./event/update-position-event');
const updateCollision = require('./event/update-collision-event');
const updateTimer = require('./event/update-timer-event');
const updateAnimationIndex = require('./event/update-animation-index-event');
const enums = require('../../../../../enum/enums');

function handleOnUpdate(entity, idx) {
  // Update the entity position coordinates
  updatePosition(entity);

  // Update collision assertion and collision action
  // Perform an entity collision assertion via the collision method, if the
  // collides status is set to true.
  if (entity.setListIdx === enums.ENTITIES.TYPE.GAME && entity.collides) {
    // Reset collided status before doing collision assertion
    entity.collided && Object.assign(entity, { collided: false });
    updateCollision(entity, idx);
  }

  // Update the entity timers
  Object.values(entity.timers).forEach(timer => {
    updateTimer(timer);
  });

  // Update the animation loop timer and image idx
  if (entity.img.length > 1) {
    updateAnimationIndex(entity);
  }
}

module.exports = handleOnUpdate;
