// Perform prowling movement/action.
// Can be overridden by the extending entity for a different prowling movement.
function moveProwl() {
  return Promise.resolve();
}

// Start prowling movement/action.
// !warning! This is an async action unaffected by the application loop.
function prowlStart() {
  // Set status flag.
  this.status.prowling = true;

  // Save reference of the entity position, for utility.
  // Pass to the prowl action to help speed up method construction.
  const x = this.x;
  const y = this.y;

  // Begin prowling.
  return this.prowl(x, y).then(() => {
    // Set status flag.
    this.status.prowling = false;

    return Promise.resolve();
  });
}

module.exports = moveProwl;
