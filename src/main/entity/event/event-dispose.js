const entities = require('../../entities');

// Perform event action.
function dispose(index) {
  entities.splice(index, 1);
}

// Enable event action.
// Dispose entity action from the entities list.
// Can be overridden by the extending entity for a different event action.
function disposeStart(index) {
  // Set status flag.
  this.status.disposing = true;

  // Assert and perform event action.
  if (this.status.disposing) {
    this.dispose(index);
  }
}

module.exports = {
  dispose,
  disposeStart
};
