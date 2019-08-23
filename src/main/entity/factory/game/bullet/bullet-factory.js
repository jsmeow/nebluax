const StandardBullet = require('../../type/game/bullet/standard/standard-bullet');

function BulletFactory(entities) {
  this.standardBullet = function(args) {
    const entity = new StandardBullet({ ...args, entities });
    entities.push(entity);
    return entity;
  };
}

module.exports = BulletFactory;
