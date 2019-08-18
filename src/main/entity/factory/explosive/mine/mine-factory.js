const StandardMine = require('../../../category/explosive/mine/standard/standard-mine');

function MineFactory(factory, list) {
  this.standardMine = function(args) {
    const entity = new StandardMine({ ...args, factory, list });
    list.push(entity);
    return entity;
  };
}

module.exports = MineFactory;
