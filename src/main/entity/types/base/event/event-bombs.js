// Create a projectile(s) entity.
// Can be overridden by the extending entity for different projectile types and
// Projectile amounts.
function bombsCreate() {}

// Run the projectile timer for a set number of frames.
// On completion, create projectile and reset the projectile timer.
function bombsFrame() {
  if (this.status.firing) {
    // Run the timer.
    this.timers.projectile.bombs.frame = this.timers.projectile.bombs.frame + 1;
  } else {
    // Reset/deactivate the timer.
    this.timers.projectile.bombs.frame = 0;
  }

  if (
    this.timers.projectile.bombs.frame > this.timers.projectile.bombs.duration
  ) {
    // Create projectile.
    this.bombsCreate();

    // Reset/deactivate the timer.
    this.timers.projectile.bombs.frame = 0;
  }
}

module.exports = {
  bombsCreate,
  bombsFrame
};
