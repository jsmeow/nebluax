const Player = require('../../../type/game/ship/player/player');

function ShipFactory(factory, entities) {
  this.player = function(args) {
    const entity = new Player({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[2].push(entity);
    return entity;
  };
}

module.exports = ShipFactory;
