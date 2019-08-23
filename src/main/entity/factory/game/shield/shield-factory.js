const StandardShield = require('../../type/game/shield/standard/standard-shield');

function ShieldFactory(entities) {
  this.standardShield = function(args) {
    const entity = new StandardShield({ ...args, entities });
    entities.push(entity);
    return entity;
  };
}

module.exports = ShieldFactory;
