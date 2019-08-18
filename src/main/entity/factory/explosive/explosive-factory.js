const BombFactory = require('./bomb/bomb-factory');
const MineFactory = require('./mine/mine-factory');

function ExplosiveFactory(factory, list) {
  this.bomb = new BombFactory(factory, list);
  this.mine = new MineFactory(factory, list);
}

module.exports = ExplosiveFactory;
