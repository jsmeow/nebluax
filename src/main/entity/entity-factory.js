const PlayerEntity = require('./player/player');
const SpaceEntity = require('./background/space');
const ExplosionDamageEntity = require('./explosion/damage/explosion-damage');
const ExplosionDestroyEntity = require('./explosion/destroy/explosion-destroy');
const Asteroid1Entity = require('./ship/asteroid/asteroid');
const StandardBulletEntity = require('./projectile/bullet/standard/standard-bullet');
const HomingBulletEntity = require('./projectile/bullet/homing/homing-bullet');
const Bomb1Entity = require('./projectile/bomb/1/bomb1');
const Mine1Entity = require('./projectile/mine/1/mine1');
const AlbatrossEntity = require('./ship/albatross/albatross');
const BowerbirdEntity = require('./ship/bowerbird/bowerbird');
const CondorEntity = require('./ship/condor/condor');
const GullEntity = require('./ship/gull/gull');
const HeronEntity = require('./ship/heron/heron');
const SwallowEntity = require('./ship/swallow/swallow');
const WarblerEntity = require('./ship/warbler/warbler');

function factory({
  x,
  y,
  width,
  height,
  entities,
  faction,
  d,
  dx,
  dy,
  creator
}) {
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
      damage: ({ attack }) => {
        const explosion = new ExplosionDamageEntity({
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
        explosion.points.attack = attack;
        entities.push(explosion);
        return explosion;
      },
      destroy: ({ attack } = { attack: 0 }) => {
        const explosion = new ExplosionDestroyEntity({
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
        explosion.points.attack = attack;
        entities.push(explosion);
        return explosion;
      }
    },
    projectile: {
      bullet: {
        standard: () => {
          const bullet = new StandardBulletEntity({
            x,
            y,
            width,
            height,
            entities,
            faction,
            d,
            dx,
            dy,
            factory,
            creator
          });
          entities.push(bullet);
          return bullet;
        },
        homing: () => {
          const bullet = new HomingBulletEntity({
            x,
            y,
            width,
            height,
            entities,
            d,
            faction,
            dx,
            dy,
            factory,
            creator
          });
          entities.push(bullet);
          return bullet;
        }
      },
      bomb: {
        1: () => {
          const bomb = new Bomb1Entity({
            x,
            y,
            width,
            height,
            entities,
            faction,
            d,
            dx,
            dy,
            factory,
            creator
          });
          entities.push(bomb);
          return bomb;
        }
      },
      mine: {
        1: () => {
          const mine = new Mine1Entity({
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
          entities.push(mine);
          return mine;
        }
      }
    },
    ship: {
      albatross: () => {
        const ship = new AlbatrossEntity({
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
        entities.push(ship);
        return ship;
      },
      asteroid: {
        1: () => {
          const asteroid = new Asteroid1Entity({
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
          entities.push(asteroid);
          return asteroid;
        }
      },
      bowerbird: () => {
        const ship = new BowerbirdEntity({
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
        entities.push(ship);
        return ship;
      },
      condor: () => {
        const ship = new CondorEntity({
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
        entities.push(ship);
        return ship;
      },
      gull: () => {
        const ship = new GullEntity({
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
        entities.push(ship);
        return ship;
      },
      heron: () => {
        const ship = new HeronEntity({
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
        entities.push(ship);
        return ship;
      },
      swallow: () => {
        const ship = new SwallowEntity({
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
        entities.push(ship);
        return ship;
      },
      warbler: () => {
        const ship = new WarblerEntity({
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
        entities.push(ship);
        return ship;
      }
    }
  };
}

module.exports = factory;
