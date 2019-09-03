const { fps } = require('../../../../../options');

module.exports = function({ entity, ...args }) {
  return {
    delay: args.delay || fps,
    frame: 1,
    index: 0,
    active: args.active || true,
    init: args.init || null,
    tick:
      args.tick ||
      function() {
        const step = this.delay / entity.imageSource.length;
        const timerRangeBegin = (this.index + 1) * step;
        const timerRangeEnd = (this.index + 2) * step;
        if (this.frame >= timerRangeBegin && this.frame < timerRangeEnd) {
          this.index = this.index + 1;
        }
        if (this.index >= entity.imageSource.length) {
          this.index = 0;
        }
        entity.image = entity.imageSource[this.index];
      },
    expire: args.expire || null,
    trigger: args.trigger || null
  };
};
