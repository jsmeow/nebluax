const DestroyExplosion = require('../../category/explosion/destroy/destroy-explosion');

function ExplosionFactory(list) {
  this.destroyExplosion = function(args) {
    const entity = new DestroyExplosion({ ...args, list });
    list.push(entity);
    return entity;
  };
}

module.exports = ExplosionFactory;
