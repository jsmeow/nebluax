// Start patrolling movement/action.
// Loops between roaming, prowling, or roaming and patrolling.
// !warning! This is an async action unaffected by the application loop.
//
// Values action can take:
// 0/undefined => alternate roam and prowl
// 1 => only roam
// 2 => only prowl
function patrol(action) {
  // Set status flag.
  this.status.patrolling = true;

  // Only roam.
  if (action === 1) {
    return this.roamStart()
      .then(() => {
        return this.pause(10);
      })
      .then(() => {
        // Assert status flag.
        // Loop.
        if (this.status.patrolling) {
          return this.patrol(1);
        }

        return Promise.resolve();
      });
  }

  // Only prowl.
  if (action === 2) {
    return this.prowlStart()
      .then(() => {
        return this.pause(10);
      })
      .then(() => {
        // Assert status flag.
        // Loop.
        if (this.status.patrolling) {
          return this.patrol(2);
        }

        return Promise.resolve();
      });
  }

  // Roam and prowl.
  return this.roamStart()
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.prowlStart(10);
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      // Assert status flag.
      // Loop.
      if (this.status.patrolling) {
        return this.patrol(0);
      }

      return Promise.resolve();
    });
}

module.exports = patrol;
