// Perform event action.
// Values action can take:
// 0/undefined => enable
// 1 => disable
function damage(action) {
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
function damageEnable() {
  // Set status flag.
  this.status.damaged = true;

  // Perform event action
  this.damage(0);
}

// Disable event action.
function damageDisable() {
  // Set status flag.
  this.status.damaged = false;

  // Unperform event action
  this.damage(1);
}

// Run the event timer for a set number of frames.
// On completion, reset the event timer.
// The event timer can be activated by using the corresponding 'start' method.
function damageFrame() {
  if (this.timers.status.damaged.frame > this.timers.status.damaged.delay) {
    // Disable event action
    this.damageDisable();

    // Reset/deactivate the timer.
    this.timers.status.damaged.frame = 0;
    this.timers.status.damaged.active = false;
  } else if (
    this.status.damaged &&
    this.timers.status.damaged.active &&
    this.timers.status.damaged.frame <= this.timers.status.damaged.delay
  ) {
    // Run the timer.
    this.timers.status.damaged.frame = this.timers.status.damaged.frame + 1;
  }
}

// Activate the event timer and enable event action.
function damageStart() {
  // Reset/activate the timer.
  this.timers.status.damaged.frame = 0;
  this.timers.status.damaged.active = true;

  // Enable event action.
  this.damageEnable();
}

module.exports = {
  damage,
  damageEnable,
  damageDisable,
  damageFrame,
  damageStart
};
