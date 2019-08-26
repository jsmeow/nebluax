// Increment or reset a timer
function updateTimerEvent(timer) {
  timer.frame > timer.delay
    ? Object.assign(timer, { frame: 0 })
    : Object.assign(timer, { frame: timer.frame + 1 });
}

module.exports = updateTimerEvent;
