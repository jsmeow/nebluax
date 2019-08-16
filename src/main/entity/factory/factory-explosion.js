const entities = require('../../entities');

function ExplosionFactory() {
  this.damage = args => {
    const ExplosionDamageEntity = require('../category/explosion/damage/explosion-damage');
    const entity = new ExplosionDamageEntity({ ...args });
    entities.push(entity);
    return entity;
  };

  this.destroy = args => {
    const ExplosionDestroyEntity = require('../category/explosion/destroy/explosion-destroy');
    const entity = new ExplosionDestroyEntity({ ...args });
    entities.push(entity);
    return entity;
  };
}

module.exports = new ExplosionFactory();
