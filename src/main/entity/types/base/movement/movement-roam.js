// Perform roaming movement in place from left to right.
// Can be overridden by the extending entity for a different roaming movement.
function roam() {
  // Save reference of the entity position.
  const x = this.x;
  const y = this.y;

  return this.vectorPoint({
    x: x - 100,
    y
  })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.vectorPoint({
        x: x + 100,
        y
      });
    })
    .then(() => {
      return this.pause(10);
    })
    .then(() => {
      return this.vectorPoint({
        x,
        y
      });
    });
}

// Start roaming movement.
// !warning! This is an async action unaffected by the application loop.
function roamStart() {
  // Set status flag.
  this.status.roaming = true;

  // Begin roaming.
  return this.roam().then(() => {
    // Set status flag.
    this.status.roaming = false;

    return Promise.resolve();
  });
}

module.exports = {
  roam,
  roamStart
};
