const StandardShield = require('../../category/shield/standard/standard-shield');

function ShieldFactory(list) {
  this.standardShield = function(args) {
    const entity = new StandardShield({ ...args, list });
    list.push(entity);
    return entity;
  };
}

module.exports = ShieldFactory;
