const PlayerEntity = require('./player/player');
const SpaceEntity = require('./background/space');
const ExplosionDamageEntity = require('./explosion/damage/explosion-damage');
const ExplosionDestroyEntity = require('./explosion/destroy/explosion-destroy');
const StandardBulletEntity = require('./projectile/bullet/standard/standard-bullet');
const Bomb1Entity = require('./projectile/bomb/1/bomb1');
const AlbatrossEntity = require('./ship/albatross/albatross');
const BowerbirdEntity = require('./ship/bowerbird/bowerbird');
const GullEntity = require('./ship/gull/gull');
const HeronEntity = require('./ship/heron/heron');
const SwallowEntity = require('./ship/swallow/swallow');

function factory({ x, y, width, height, entities, faction, dx, dy, creator }) {
  return {
    player: () => {
      const player = new PlayerEntity(entities, factory);
      entities.push(player);
      return player;
    },
    space: () => {
      return new SpaceEntity({
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
      });
    },
    explosion: {
      damage: () => {
        const damageExplosion = new ExplosionDamageEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          creator
        });
        entities.push(damageExplosion);
        return damageExplosion;
      },
      destroy: () => {
        const destroyExplosion = new ExplosionDestroyEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          creator
        });
        entities.push(destroyExplosion);
        return destroyExplosion;
      }
    },
    projectile: {
      bullet: {
        standard: () => {
          const standardBullet = new StandardBulletEntity({
            x,
            y,
            width,
            height,
            entities,
            faction,
            dx,
            dy,
            factory,
            creator
          });
          entities.push(standardBullet);
          return standardBullet;
        }
      },
      bomb: {
        1: () => {
          const bomb1 = new Bomb1Entity({
            x,
            y,
            width,
            height,
            entities,
            faction,
            dx,
            dy,
            factory,
            creator
          });
          entities.push(bomb1);
          return bomb1;
        }
      }
    },
    ship: {
      albatross: () => {
        const albatross = new AlbatrossEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          factory
        });
        entities.push(albatross);
        return albatross;
      },
      bowerbird: () => {
        const bowerbird = new BowerbirdEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          factory
        });
        entities.push(bowerbird);
        return bowerbird;
      },
      gull: () => {
        const gull = new GullEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          factory
        });
        entities.push(gull);
        return gull;
      },
      heron: () => {
        const heron = new HeronEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          factory
        });
        entities.push(heron);
        return heron;
      },
      swallow: () => {
        const swallow = new SwallowEntity({
          x,
          y,
          width,
          height,
          entities,
          faction,
          dx,
          dy,
          factory
        });
        entities.push(swallow);
        return swallow;
      }
    }
  };
}

module.exports = factory;
