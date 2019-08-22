const StandardBomb = require('../../../category/explosive/bomb/standard/standard-bomb');

function BombFactory(factory, entities) {
  this.standardBomb = function(args) {
    const entity = new StandardBomb({ ...args, factory, entities });
    entities.push(entity);
    return entity;
  };
}

module.exports = BombFactory;
