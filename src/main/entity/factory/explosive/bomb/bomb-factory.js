const StandardBomb = require('../../../category/explosive/bomb/standard/standard-bomb');

function BombFactory(factory, list) {
  this.standardBomb = function(args) {
    const entity = new StandardBomb({ ...args, factory, list });
    list.push(entity);
    return entity;
  };
}

module.exports = BombFactory;
