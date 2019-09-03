const canvas = require('../../../../../../canvas/canvas-controller');
const PhysicalEntity = require('../physical-entity');
const utils = require('../../../../../../../utils/utils');
const emojis = require('emoji.json/emoji-compact.json');

function Asteroid(args) {
  PhysicalEntity.call(
    this,
    Object.assign(args, {
      x: args.x || canvas.width * 0.1, // utils.entity.position.x.rng([0, canvas.width]),
      y: args.y || -args.height,
      speed: args.speed || Asteroid.SPEED,
      dy: args.dy || Asteroid.DY
    })
  );

  /** @override **/
  /*  this.preUpdate = function() {
    if (utils.entity.assert.collision.boundary.bottom(this.y)) {
      this.x = utils.entity.position.x.rng();
      this.y = -this.height;
    }
  };*/
}

Asteroid.prototype = Object.create(PhysicalEntity.prototype);

Asteroid.PATH = `${PhysicalEntity.PATH}/asteroid`;
Asteroid.EMOJI = emojis[2831];
Asteroid.SPEED = 100;
Asteroid.DY = 1;

module.exports = Asteroid;
