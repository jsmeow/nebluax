function UpdateWorkerHandler(entity) {
  // Create the web workers
  const updatePositionWorker = new Worker(
    './main/entity/worker-handler/update/worker/update-position-worker.js'
  );
  const updateCollisionWorker = new Worker(
    './main/entity/worker-handler/update/worker/update-collision-worker.js'
  );
  const updateAnimationWorker = new Worker(
    './main/entity/worker-handler/update/worker/update-animation-worker.js'
  );

  // Create the web workers response events
  updatePositionWorker.onmessage = function(message) {
    console.log(`${entity.props.type} end: ${window.performance.now()}`);
    const { pos } = message.data;
    entity.pos = { ...pos };
  };

  updateCollisionWorker.onmessage = function(message) {
    if (message.data.entity.status.collided) {
      entity.pos = { ...message.data.entity.pos };
      entity.dims = { ...message.data.entity.dims };
      entity.props = { ...message.data.entity.props };
      entity.status = { ...message.data.entity.status };
      entity.points = { ...message.data.entity.points };
    }

    if (message.data._entity.status.collided) {
      const _entity = entity.meta.entities[message.data._entity.index];
      _entity.pos = { ...message.data._entity.pos };
      _entity.dims = { ...message.data._entity.dims };
      _entity.props = { ...message.data._entity.props };
      _entity.status = { ...message.data._entity.status };
      _entity.points = { ...message.data._entity.points };
    }
  };

  updateAnimationWorker.onmessage = function(message) {
    const { anim } = message.data;
    entity.anim = { ...anim };
  };

  // Update the entity position coordinates
  this.updatePosition = function() {
    console.log(`${entity.props.type} begin: ${window.performance.now()}`);
    updatePositionWorker.postMessage({
      pos: entity.pos,
      vector: entity.vector
    });
  };

  // Update collision assertion and collision action
  // Perform an entity collision assertion via the collision method, if the
  // collides status is set to true.
  this.updateCollision = function(index) {
    if (entity.collides) {
      // Reset collided status before doing collision assertion
      if (entity.collided) {
        entity.collided = false;
      }

      // Cycle through the entities list and perform a collision assertion and
      // collision action
      entity.meta.entities.list.forEach((_entity, _index) => {
        updateCollisionWorker.postMessage({
          entity: {
            index,
            pos: entity.pos,
            dims: entity.dims,
            props: entity.props,
            status: entity.status,
            points: entity.points
          },
          _entity: {
            index: _index,
            pos: _entity.pos,
            dims: _entity.dims,
            props: _entity.props,
            status: _entity.status,
            points: _entity.points
          }
        });
      });
    }
  };

  // Update the animation loop timer and image index
  this.updateAnimation = function() {
    const imgLength = entity.img.src.length;

    if (imgLength > 1) {
      updateAnimationWorker.postMessage({
        imgLength,
        anim: entity.anim
      });
    }
  };

  // Terminate the web workers
  this.terminate = function() {
    updatePositionWorker.terminate();
    updateCollisionWorker.terminate();
    updateAnimationWorker.terminate();
  };
}

module.exports = UpdateWorkerHandler;
