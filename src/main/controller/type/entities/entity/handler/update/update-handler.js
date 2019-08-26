const updatePosition = require('./handle/update-position');
const updateCollision = require('./handle/update-collision');
const updateTimer = require('./handle/update-timer');
const updateAnimationIndex = require('./handle/update-animation-index');

function updateHandler(entity, index) {
  // Update the entity position coordinates
  updatePosition(entity);

  // Update collision assertion and collision action
  // Perform an entity collision assertion via the collision method, if the
  // collides status is set to true.
  if (entity.collides) {
    // Reset collided status before doing collision assertion
    entity.collided && Object.assign(entity, { collided: false });
    updateCollision(entity, index);
  }

  // Update the entity timers
  Object.values(entity.timers).forEach(timer => {
    updateTimer(timer);
  });

  // Update the animation loop timer and image index
  if (entity.img.length > 1) {
    updateAnimationIndex(entity);
  }
}

module.exports = updateHandler;
