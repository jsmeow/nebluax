const entities = require('../entities');

function Wave() {
  // The wave entities list.
  this.entities = [];

  // The wave entities path entities.
  this.paths = [];

  // Flags whether the current wave has been cleared.
  this.cleared = false;
}

// Initializer.
Wave.prototype.initialize = function() {
  this.createEntities();
  this.createPaths();
};

// Create entities.
// To be implemented by the extending class.
Wave.prototype.createEntities = function() {};

// Create the entity paths.
// To be implemented by the extending class.
Wave.prototype.createPaths = function() {};

// Clear the wave once the defeat condition is met.
// To be implemented by the extending class.
Wave.prototype.clear = function() {};

// Begin the wave.
Wave.prototype.begin = function() {};

// Update action.
Wave.prototype.update = function() {};

module.exports = Wave;
