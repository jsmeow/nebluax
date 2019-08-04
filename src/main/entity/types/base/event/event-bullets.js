// Create a projectile(s) entity.
// Can be overridden by the extending entity for different projectile types and
// Projectile amounts.
function bulletsCreate() {}

// Run the projectile timer for a set number of frames.
// On completion, create projectile and reset the projectile timer.
function bulletsFrame() {
  if (
    this.timers.projectile.bullets.frame <= this.timers.projectile.bullets.delay
  ) {
    // Run the timer.
    this.timers.projectile.bullets.frame =
      this.timers.projectile.bullets.frame + 1;
  } else if (
    this.timers.projectile.bullets.frame > this.timers.projectile.bullets.delay
  ) {
    if (this.status.firing) {
      // Create projectile.
      this.bulletsCreate();
    }

    // Reset/deactivate the timer.
    this.timers.projectile.bullets.frame = 0;
  }
}

module.exports = {
  bulletsCreate,
  bulletsFrame
};
