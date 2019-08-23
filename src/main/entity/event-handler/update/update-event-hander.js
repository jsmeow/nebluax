const updatePosition = require('./event/update-position');
const updateCollision = require('./event/update-collision');
const updateTimer = require('./event/update-timer');
const updateAnimationIndex = require('./event/update-animation-index');
const updateDispose = require('./event/update-dispose');

function UpdateEventHandler(entity) {
  // Update the entity position coordinates
  this.updatePosition = function() {
    updatePosition(entity);
  };

  // Update collision assertion and collision action
  // Perform an entity collision assertion via the collision method, if the
  // collides status is set to true.
  this.updateCollision = function(index) {
    if (entity.status.collides) {
      // Reset collided status before doing collision assertion
      if (entity.status.collided) {
        entity.status.collided = false;
      }

      updateCollision(entity, index);
    }
  };

  // Update/tick the entity timers
  this.updateTimers = function() {
    Object.values(entity.timers).forEach(timer => {
      updateTimer(timer);
    });
  };

  // Update the animation loop timer and image index
  this.updateAnimationIndex = function() {
    if (entity.img.src.length > 1) {
      updateAnimationIndex(entity);
    }
  };

  // Remove the entity from the entities list
  this.updateDispose = function() {
    if (entity.status.dispose) {
      updateDispose();
    }
  };
}

module.exports = UpdateEventHandler;
