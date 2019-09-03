module.exports = function(entity) {
  Object.values(entity.timers).forEach(timer => {
    if (timer.active && !entity.dispose) {
      timer.tick && timer.tick();
      if (timer.frame > timer.delay) {
        timer.expire && timer.expire();
        timer.frame = 0;
      } else {
        timer.frame = timer.frame + 1;
      }
    } else if (timer.trigger && timer.trigger()) {
      timer.init && timer.init();
      timer.frame = 0;
      timer.active = true;
    }
  });
};
