const Asteroid1 = require('../../entity/type/game/asteroid/asteroid-1/asteroid-1');

function GameEntityFactory(setListIdx) {
  this.setListIdx = setListIdx;

  this.asteroid = {
    1: args => this.spawn(Asteroid1, args)
  };
}

module.exports = GameEntityFactory;
