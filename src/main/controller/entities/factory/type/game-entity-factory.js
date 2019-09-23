const Asteroid = require('../../entity/game/combat/asteroid/asteroid');
const BasicBullet = require('../../entity/game/combat/bullet/basic/basic-bullet');
const Explosion = require('../../entity/game/combat/explosion/explosion');
const Player = require('../../entity/game/combat/ship/player/player');
const Bomb = require('../../entity/game/combat/explosive/bomb/bomb');
const Mine = require('../../entity/game/combat/explosive/mine/mine');
const Shield = require('../../entity/game/combat/shield/shield');

const enums = require('../../../../enums/enums');
function GameEntityFactory(setListIdx) {
  this.setListIdx = setListIdx;

  this.combat = {
    asteroid: args => this.spawn(Asteroid, args),
    bullet: {
      basic: {
        allied: args => {
          args.faction = enums.entity.faction.ALLIED;
          args.imagePath = BasicBullet.IMAGE_PATH.ALLIED;
          this.spawn(BasicBullet, args);
        },
        enemy: args => {
          args.faction = enums.entity.faction.ENEMY;
          args.imagePath = BasicBullet.IMAGE_PATH.ENEMY;
          this.spawn(BasicBullet, args);
        },
        neutral: args => {
          args.faction = enums.entity.faction.NEUTRAL;
          args.imagePath = BasicBullet.IMAGE_PATH.NEUTRAL;
          this.spawn(BasicBullet, args);
        }
      }
    },
    explosion: args => this.spawn(Explosion, args),
    explosive: {
      bomb: {
        allied: args => {
          args.faction = enums.entity.faction.ALLIED;
          this.spawn(Bomb, args);
        },
        enemy: args => {
          args.faction = enums.entity.faction.ENEMY;
          this.spawn(Bomb, args);
        },
        neutral: args => {
          args.faction = enums.entity.faction.NEUTRAL;
          this.spawn(Bomb, args);
        }
      },
      mine: {
        allied: args => {
          args.faction = enums.entity.faction.ALLIED;
          this.spawn(Mine, args);
        },
        enemy: args => {
          args.faction = enums.entity.faction.ENEMY;
          this.spawn(Mine, args);
        },
        neutral: args => {
          args.faction = enums.entity.faction.NEUTRAL;
          this.spawn(Mine, args);
        }
      }
    },
    shield: args => this.spawn(Shield, args),
    ship: {
      player: args => this.spawn(Player, args)
    }
  };

  this.decorator = {
    shipTrail: {}
  };
}

module.exports = GameEntityFactory;
