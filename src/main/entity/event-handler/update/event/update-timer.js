// Increment or reset a timer
function updateTimer(timer) {
  if (timer.frame >= timer.delay) {
    timer.frame = 0;
  } else {
    timer.frame = timer.frame + 1;
  }
}

module.exports = updateTimer;
