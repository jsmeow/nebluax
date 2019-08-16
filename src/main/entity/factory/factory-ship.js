const entities = require('../../entities');

function ShipFactory() {
  this.bowerbird = args => {
    const BowerbirdEntity = require('../category/ship/bowerbird/bowerbird');
    entities.push(new BowerbirdEntity({ ...args }));
    return entities[entities.length - 1];
  };

  this.player = args => {
    const PlayerEntity = require('../category/ship/player/player');
    entities.push(new PlayerEntity({ ...args }));
    return entities[entities.length - 1];
  };
}

module.exports = new ShipFactory();
