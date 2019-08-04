// Perform event action.
// Values action can take:
// 0/undefined => enable
// 1 => disable
function shield(action) {
  if (!action || action === 0) {
    // Set status flag.
    this.status.invincible = true;
  }

  if (action === 1) {
    // Set status flag.
    this.status.invincible = false;
  }
}

// Enable event action.
function shieldEnable() {
  // Set status flag.
  this.status.shielded = true;

  // Perform event action
  this.shield(0);
}

// Disable event action.
function shieldDisable() {
  // Set status flag.
  this.status.shielded = false;

  // Unperform event action
  this.shield(1);
}

// Run the event timer for a set number of frames.
// On completion, reset the event timer.
// The event timer can be activated by using the corresponding 'start' method.
function shieldFrame() {
  if (this.status.shielded && this.timers.status.shielded.active) {
    // Run the timer.
    this.timers.status.shielded.frame = this.timers.status.shielded.frame + 1;
  }

  if (this.timers.status.shielded.frame > this.timers.status.shielded.delay) {
    // Disable event action
    this.shieldDisable();

    // Reset/deactivate the timer.
    this.timers.status.shielded.frame = 0;
    this.timers.status.shielded.active = false;
  }
}

// Activate the event timer and enable event action.
function shieldStart() {
  // Reset/activate the timer.
  this.timers.status.shielded.frame = 0;
  this.timers.status.shielded.active = true;

  // Enable event action.
  this.shieldEnable();
}

module.exports = {
  shield,
  shieldEnable,
  shieldDisable,
  shieldFrame,
  shieldStart
};
