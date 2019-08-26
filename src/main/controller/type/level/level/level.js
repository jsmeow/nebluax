function Level() {
  // The level waves entities.
  this.waves = [];

  // The current wave being executed.
  this.wave = null;

  // Flags whether the wave level has been cleared.
  this.cleared = false;
}

// Initializer.
Level.prototype.initialize = function() {
  this.createWaves();
  this.nextWave();
};

// To be implemented by the extending class.
Level.prototype.createWaves = function() {};

// Begin the current wave.
Level.prototype.nextWave = function() {
  if (this.waves.length > 0) {
    // Remove first element of the waves entities, store as current.
    this.wave = this.waves.shift();

    // Begin the wave wave.
    this.wave.begin();
  } else {
    this.cleared = true;
  }
};

// Update action.
Level.prototype.update = function() {
  this.wave.update();

  // Start the next wave.
  if (this.wave.cleared) {
    this.nextWave();
  }
};

module.exports = Level;
