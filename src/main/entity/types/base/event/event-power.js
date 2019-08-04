// Perform event action.
// Values action can take:
// 0/undefined => enable
// 1 => disable
// Can be overridden by the extending entity for a different event action.
function power(action) {
  if (!action || action === 0) {
  }

  if (action === 1) {
  }
}

// Enable event action.
function powerEnable() {
  // Set status flag.
  this.status.powered = true;

  // Perform event action
  this.power(0);
}

// Disable event action.
function powerDisable() {
  // Set status flag.
  this.status.powered = false;

  // Unperform event action
  this.power(1);
}

// Run the event timer for a set number of frames.
// On completion, reset the event timer.
// The event timer can be activated by using the corresponding 'start' method.
function powerFrame() {
  if (this.status.powered && this.timers.status.powered.active) {
    // Run the timer.
    this.timers.status.powered.frame = this.timers.status.powered.frame + 1;
  }

  if (this.timers.status.powered.frame > this.timers.status.powered.delay) {
    // Disable event action
    this.powerDisable();

    // Reset/deactivate the timer.
    this.timers.status.powered.frame = 0;
    this.timers.status.powered.active = false;
  }
}

// Activate the event timer and enable event action.
function powerStart() {
  // Reset/activate the timer.
  this.timers.status.powered.frame = 0;
  this.timers.status.powered.active = true;

  // Enable event action.
  this.powerEnable();
}

module.exports = {
  power,
  powerEnable,
  powerDisable,
  powerFrame,
  powerStart
};
