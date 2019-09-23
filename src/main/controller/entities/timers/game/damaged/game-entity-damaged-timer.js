const { fps } = require('../../../../../options');

function toggleDamagedImage(entity) {
  if (entity.imageDamaged) {
    if (entity.timers.animation) {
      entity.timers.animation.active = !entity.timers.animation.active;
    }
    entity.image = entity.damaged ? entity.imageDamaged : entity.imageBasic;
  }
}

function toggleDamagedStatus(entity) {
  entity.damaged = !entity.damaged;
}

function toggleInvincibleStatus(entity) {
  entity.invincible = !entity.invincible;
}

function toggleTimerState(timer) {
  timer.active = !timer.active;
}

module.exports = function(args = {}) {
  return {
    delay: fps * 0.125,
    frame: 0,
    idx: 0,
    active: args.active || false,
    init:
      args.init ||
      function(entity) {
        if (entity.damages) {
          toggleDamagedStatus(entity);
          toggleDamagedImage(entity);
          toggleTimerState(this);
        }
      },
    begin:
      args.begin ||
      function(entity) {
        toggleInvincibleStatus(entity);
      },
    tick: args.tick || null,
    expire:
      args.expire ||
      function(entity) {
        toggleDamagedStatus(entity);
        toggleDamagedImage(entity);
        toggleInvincibleStatus(entity);
        toggleTimerState(this);
      },
    trigger: args.trigger || null
  };
};
