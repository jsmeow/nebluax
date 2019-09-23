const { fps } = require('../../../../../options');

module.exports = function(args = {}) {
  return {
    delay: args.delay || fps * 2,
    frame: 0,
    index: 0,
    active: args.active || true,
    init: args.init || null,
    begin: args.begin || null,
    tick:
      args.tick ||
      function(entity) {
        if (!entity.parent.alive || entity.parent.dispose) {
          entity.alive = false;
        }
      },
    expire:
      args.expire ||
      function(entity) {
        entity.alive = false;
      },
    trigger: args.trigger || null
  };
};
