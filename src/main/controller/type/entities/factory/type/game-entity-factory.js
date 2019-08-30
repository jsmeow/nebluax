const Asteroid1 = require('../../entity/type/game/asteroid/asteroid-1/asteroid-1');
const Player = require('../../entity/type/game/ship/player/player');

function GameEntityFactory(setListIdx) {
  this.setListIdx = setListIdx;

  this.asteroid = {
    1: args => this.spawn(Asteroid1, args)
  };

  this.ship = {
    player: args => this.spawn(Player, args)
  };
}

module.exports = GameEntityFactory;
