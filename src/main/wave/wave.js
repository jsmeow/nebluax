function Wave(entities) {
  // The entities list.
  this.entities = entities;

  // The wave entities list.
  this.waveEntities = [];

  // The wave entities path list.
  this.paths = [];

  // Flags whether the current wave has been cleared.
  this.cleared = false;
}

// Initializer.
Wave.prototype.init = function() {
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
Wave.prototype.begin = function() {
  this.waveEntities.forEach(entity => {
    this.entities.push(entity);
  });
};

// Update action.
Wave.prototype.update = function() {};

module.exports = Wave;
