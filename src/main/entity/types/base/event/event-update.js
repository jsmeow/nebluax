// Perform pre-event action.
// Update the entity on a single application frame.
// Can be overridden by the extending entity for a different event action.
function updatePre(index) {}

// Perform timers event action.
// Update the entity timers on a single application frame.
// Can be overridden by the extending entity for a different event action.
function updateTimers(index) {
  // Update the damage timer.
  if (this.status.damaged && this.timers.status.damaged.active) {
    this.damageFrame();
  }

  // Update the shield timer.
  if (this.status.shielded && this.timers.status.shielded.active) {
    this.shieldFrame();
  }

  // Update the power timer.
  if (this.status.powered && this.timers.status.powered.active) {
    this.powerFrame();
  }

  // Update the projectile bullets timer.
  if (this.status.firing) {
    this.bulletsFrame();
  }
}

// Perform post-event action.
// Update the entity on a single application frame.
// Can be overridden by the extending entity for a different event action.
function updatePost(index) {}

// Perform update event action.
function update(index) {
  // Perform pre-event action.
  this.updatePre(index);

  // Assert alive status flag.
  // Dispose entity is assertion fails.
  if (this.status.alive) {
    // Perform tick event action.
    this.updateTimers(index);

    // Perform movement, and assert if a collision has occurred during the
    // Vector movement.
    const hasCollisionOccurred = this.vectorMove(index);

    // Perform post-event action.
    this.updatePost(index, hasCollisionOccurred);
  } else {
    // Perform dispose event action.
    this.disposeStart(index);
  }
}

module.exports = {
  updatePre,
  updateTimers,
  updatePost,
  update
};
