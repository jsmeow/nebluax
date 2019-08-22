const StandardMine = require('../../../category/explosive/mine/standard/standard-mine');

function MineFactory(factory, entities) {
  this.standardMine = function(args) {
    const entity = new StandardMine({ ...args, factory, entities });
    entities.push(entity);
    return entity;
  };
}

module.exports = MineFactory;
