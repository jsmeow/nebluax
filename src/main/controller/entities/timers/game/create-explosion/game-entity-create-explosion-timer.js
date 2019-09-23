const { fps } = require('../../../../../options');
const utils = require('../../../../../utils/utils');

function spawnExplosion(entity) {
  const { x, y, width, height } = entity;
  entity.factory.game.combat.explosion({
    x: utils.entity.position.x.rng([x, x + width]),
    y: utils.entity.position.y.rng([y, y + height]),
    parent: entity
  });
}

module.exports = function({ amount = 1, ...args } = {}) {
  return {
    delay: fps * 0.125,
    frame: 0,
    index: 0,
    active: args.active || false,
    init: args.init || null,
    begin: args.begin || null,
    tick:
      args.tick ||
      function(entity) {
        const step = this.delay / (amount + 0.5);
        const timerRangeBegin = this.index * step;
        const timerRangeEnd = (this.index + 1) * step;
        if (this.frame >= timerRangeBegin && this.frame < timerRangeEnd) {
          spawnExplosion(entity);
          this.index = this.index + 1;
        }
      },
    expire:
      args.expire ||
      function() {
        this.active = false;
      },
    trigger: args.trigger || null
  };
};
