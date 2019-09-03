const Asteroid1 = require('../../entity/game/combat/physical/asteroid/1/asteroid-1');
const Explosion1 = require('../../entity/game/combat/invulnerable/explosion/1/explosion-1');
const Player = require('../../entity/game/combat/physical/ship/player/player');
const StandardBullet = require('../../entity/game/combat/invulnerable/bullet/standard/standard-bullet');
const enums = require('../../../../enums/enums');

function GameEntityFactory(setListIdx) {
  this.setListIdx = setListIdx;

  this.combat = {
    invulnerable: {
      bullet: {
        standardBullet: {
          allied: args => {
            args.faction = enums.entity.faction.ALLIED;
            args.imagePath = StandardBullet.IMAGE_PATH.ALLIED;
            this.spawn(StandardBullet, args);
          },
          enemy: args => {
            args.faction = enums.entity.faction.ENEMY;
            args.imagePath = StandardBullet.IMAGE_PATH.ENEMY;
            this.spawn(StandardBullet, args);
          },
          neutral: args => {
            args.faction = enums.entity.faction.NEUTRAL;
            args.imagePath = StandardBullet.IMAGE_PATH.NEUTRAL;
            this.spawn(StandardBullet, args);
          }
        }
      },
      explosion: {
        explosion1: args => this.spawn(Explosion1, args)
      }
    },
    physical: {
      asteroid: {
        asteroid1: args => this.spawn(Asteroid1, args)
      },
      ship: {
        player: args => this.spawn(Player, args)
      }
    },
    special: {}
  };

  this.decorator = {
    shipTrail: {}
  };
}

module.exports = GameEntityFactory;
