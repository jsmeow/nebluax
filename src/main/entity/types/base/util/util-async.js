// Creates a pause/delay timer.
// !warning! This is an async action unaffected by the application loop.
function pause(delay) {
  // Set status flag.
  this.status.paused = true;

  return new Promise(resolve => {
    setTimeout(() => {
      // Set status flag.
      this.status.paused = false;

      resolve();
    }, fps * delay);
  });
}

module.exports = {
  pause
};
