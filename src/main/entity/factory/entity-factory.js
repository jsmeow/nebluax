const BackgroundFactory = require('./background/background-factory');
const DisplayFactory = require('./display/display-factory');
const GameFactory = require('./game/game-factory');

function EntityFactory(entities) {
  this.bg = new BackgroundFactory(this, entities);
  this.disp = new DisplayFactory(this, entities);
  this.game = new GameFactory(this, entities);
}

module.exports = EntityFactory;
