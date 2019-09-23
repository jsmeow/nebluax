const { fps } = require('../../../../../options');

module.exports = function({ fireBullet, ...args } = {}) {
  return {
    delay: args.delay || fps,
    frame: 0,
    index: 0,
    active: args.active || true,
    init: args.init || null,
    begin: args.begin || null,
    tick: args.tick || null,
    expire:
      args.expire ||
      function(entity) {
        if (entity.alive && !entity.dispose && entity.firing && fireBullet) {
          fireBullet();
        }
      },
    trigger: args.trigger || null
  };
};
