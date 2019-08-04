const entities = require('../entities');

function ProjectileFactory() {
  this.standardBomb = args => {
    const StandardBombEntity = require('../types/projectile/bomb/standard/standard-bomb');
    const entity = new StandardBombEntity({ ...args });
    entities.push(entity);
    return entity;
  };

  this.standardBullet = args => {
    const StandardBulletEntity = require('../types/projectile/bullet/standard/standard-bullet');
    const entity = new StandardBulletEntity({ ...args });
    entities.push(entity);
    return entity;
  };

  this.homingBullet = args => {
    const HomingBulletEntity = require('../types/projectile/bullet/homing/homing-bullet');
    const entity = new HomingBulletEntity({ ...args });
    entities.push(entity);
    return entity;
  };

  this.standardMine = args => {
    const StandardMineEntity = require('../types/projectile/mine/standard/standard-mine');
    const entity = new StandardMineEntity({ ...args });
    entities.push(entity);
    return entity;
  };
}

module.exports = new ProjectileFactory();
