const canvas = require('../../../../../canvas/canvas-controller');
const GameEntity = require('../game-entity');
const util = require('../../../util/entity-util');
const emojis = require('emoji.json/emoji-compact.json');

function Asteroid(args) {
  GameEntity.call(
    this,
    Object.assign(args, {
      x: args.x || util.pos.x.rand(),
      y: args.y || -args.height,
      speed: args.speed || 100, // util.num.rand.float(0.25, 0.3),
      dy: args.dy || 1,
      emoji: Asteroid.EMOJI
    })
  );

  /** @override **/
  this.preUpdate = function() {
    util.valid.collision.boundary.bttm(this.y, 0) &&
      Object.assign(this, {
        x: util.pos.x.rand(),
        y: util.pos.y.rand([-canvas.height, 0])
      });
  };
}

Asteroid.prototype = Object.create(GameEntity.prototype);

Asteroid.PATH = `${GameEntity.PATH}/asteroid`;
Asteroid.EMOJI = emojis[2831];

module.exports = Asteroid;
