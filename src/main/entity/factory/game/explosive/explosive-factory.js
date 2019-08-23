const BombFactory = require('./bomb/bomb-factory');
const MineFactory = require('./mine/mine-factory');

function ExplosiveFactory(factory, entities) {
  this.bomb = new BombFactory(factory, entities);
  this.mine = new MineFactory(factory, entities);
}

module.exports = ExplosiveFactory;
