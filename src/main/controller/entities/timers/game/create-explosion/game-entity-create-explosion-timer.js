const { fps } = require('../../../../../options');
const utils = require('../../../../../utils/utils');

module.exports = function({ entity, amount, ...args }) {
  const delayStep = fps * 0.125;
  const delay = amount * delayStep;
  const spawnExplosion = () => {
    entity.factory.game.combat.invulnerable.explosion.explosion1({
      x: utils.entity.position.x.rng([entity.x, entity.x + entity.width]),
      y: utils.entity.position.y.rng([entity.y, entity.y + entity.height]),
      creator: entity
    });
  };

  return {
    delay,
    frame: 0,
    index: 0,
    active: args.active || false,
    init: args.init || null,
    begin: args.begin || null,
    tick:
      args.tick ||
      function() {
        const timerRangeBegin = this.index * delayStep;
        const timerRangeEnd = (this.index + 1) * delayStep;
        if (this.frame >= timerRangeBegin && this.frame < timerRangeEnd) {
          spawnExplosion();
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
