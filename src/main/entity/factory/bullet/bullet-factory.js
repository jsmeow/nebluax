const StandardBullet = require('../../category/bullet/standard/standard-bullet');

function BulletFactory(list) {
  this.standardBullet = function(args) {
    const entity = new StandardBullet({ ...args, list });
    list.push(entity);
    return entity;
  };
}

module.exports = BulletFactory;
