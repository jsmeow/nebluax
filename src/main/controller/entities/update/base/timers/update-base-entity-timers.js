module.exports = function(entity) {
  Object.values(entity.timers).forEach(timer => {
    if (timer.active && !entity.dispose) {
      if (timer.frame === 0 && timer.begin) {
        timer.begin(entity);
      }
      if (timer.tick) {
        timer.tick(entity);
      }
      if (timer.frame <= timer.delay) {
        timer.frame = timer.frame + 1;
      }
      if (timer.frame > timer.delay) {
        if (timer.expire) {
          timer.expire(entity);
        }
        timer.frame = 0;
      }
    } else if (timer.trigger && timer.trigger(entity)) {
      if (timer.init) {
        timer.init(entity);
      }
      timer.frame = 0;
      timer.active = true;
    }
  });
};
