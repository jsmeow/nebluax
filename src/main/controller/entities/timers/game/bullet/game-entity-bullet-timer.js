const { fps } = require('../../../../../options');

module.exports = function({ entity, spawn, ...args }) {
  return {
    delay: args.delay || fps,
    frame: 0,
    index: 0,
    active: args.active || true,
    init: args.init || null,
    tick: args.tick || null,
    expire: args.expire || (entity.alive && entity.firing && spawn),
    trigger: args.trigger || null
  };
};
