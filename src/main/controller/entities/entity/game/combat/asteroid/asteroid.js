const canvas = require('../../../../../canvas/canvas-controller');
const CombatEntity = require('../combat-entity');
const timers = require('../../../../timers/entity-timers');
const emojis = require('emoji.json/emoji-compact.json');

function Asteroid(args) {
  CombatEntity.call(
    this,
    Object.assign(args, {
      // x: args.x || utils.entity.position.x.rng([0, canvas.width]),
      x: args.x || canvas.width * 0.12,
      y: args.y || -args.height,
      width: args.width || Asteroid.WIDTH,
      height: args.height || Asteroid.HEIGHT,
      speed: args.speed || Asteroid.SPEED,
      dx: args.dx || Asteroid.DX,
      dy: args.dy || Asteroid.DY,
      imagePath: Asteroid.IMAGE_PATH.BASIC,
      imagePathDamaged: Asteroid.IMAGE_PATH.DAMAGED,
      health: args.health || Asteroid.HEALTH,
      attack: args.attack || Asteroid.ATTACK,
      damages: args.damages || Asteroid.DAMAGES
    })
  );

  // Add the create explosion timer to the timer list
  this.timers.explosion = timers.game.explosion({
    amount: 3,
    trigger: () => !this.alive
  });
}

Asteroid.prototype = Object.create(CombatEntity.prototype);

Asteroid.PATH = `${CombatEntity.PATH}/asteroid`;
Asteroid.EMOJI = emojis[2901];
Asteroid.WIDTH = 23;
Asteroid.HEIGHT = 23;
Asteroid.SPEED = 100;
Asteroid.DX = 0;
Asteroid.DY = 1;
Asteroid.IMAGE_PATH = {
  BASIC: `${Asteroid.PATH}/assets/images/basic/image-source.png`,
  DAMAGED: `${Asteroid.PATH}/assets/images/damaged/image-source.png`
};
Asteroid.HEALTH = 1;
Asteroid.ATTACK = 1;
Asteroid.DAMAGES = true;

module.exports = Asteroid;
