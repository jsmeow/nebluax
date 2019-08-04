// Create a projectile(s) entity.
// Can be overridden by the extending entity for different projectile types and
// Projectile amounts.
function minesCreate() {}

// Run the projectile timer for a set number of frames.
// On completion, create projectile and reset the projectile timer.
function minesFrame() {
  if (this.status.firing) {
    // Run the timer.
    this.timers.projectile.mines.frame = this.timers.projectile.mines.frame + 1;
  } else {
    // Reset/deactivate the timer.
    this.timers.projectile.mines.frame = 0;
  }

  if (
    this.timers.projectile.mines.frame > this.timers.projectile.mines.duration
  ) {
    // Create projectile.
    this.minesCreate();

    // Reset/deactivate the timer.
    this.timers.projectile.mines.frame = 0;
  }
}

module.exports = {
  minesCreate,
  minesFrame
};
