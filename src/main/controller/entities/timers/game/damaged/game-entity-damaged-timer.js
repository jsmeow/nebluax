const { fps } = require('../../../../../options');

function toggle(timer, entity, state) {
  if (entity.imageDamaged) {
    if (entity.timers.image) {
      entity.timers.animation.active = !state;
    }
    entity.image = state ? entity.imageDamaged : entity.imageBasic;
  }
  entity.damaged = state;
  entity.invincible = state;
  timer.active = state;
}

module.exports = function({ entity, ...args }) {
  return {
    delay: fps * 0.125,
    frame: 0,
    idx: 0,
    active: args.active || false,
    init:
      args.init ||
      function() {
        toggle(this, entity, true);
      },
    tick: args.tick || null,
    expire:
      args.expire ||
      function() {
        toggle(this, entity, false);
      },
    trigger: args.trigger || null
  };
};
