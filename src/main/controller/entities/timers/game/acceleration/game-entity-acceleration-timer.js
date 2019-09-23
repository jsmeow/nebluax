const { fps } = require('../../../../../options');

function accelerate(entity, acceleration) {
  entity.speed = entity.speed + acceleration;
}

function stopAccelerate(entity, acceleration, stopSpeed) {
  return entity.speed < stopSpeed;
}

function toggleTimerState(timer) {
  timer.active = !timer.active;
}

module.exports = function({ acceleration, stopSpeed, ...args } = {}) {
  return {
    delay: args.delay || fps,
    frame: 0,
    index: 0,
    active: args.active || true,
    init: args.init || null,
    begin: args.begin || null,
    tick:
      args.tick ||
      function(entity) {
        accelerate(entity, acceleration);
        if (stopAccelerate(entity, acceleration, stopSpeed)) {
          toggleTimerState(this);
        }
      },
    expire: args.expire || null,
    trigger: args.trigger || null
  };
};
