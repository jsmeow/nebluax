const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const util = require('../../../../util/entity-util');
const emojis = require('emoji.json/emoji-compact.json');

function Planet(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || util.pos.x.rand(),
      y: args.y || util.pos.y.rand(),
      speed: args.speed || util.num.rand.float(20, 30),
      dy: args.dy || 1,
      emoji: Planet.EMOJI
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

Planet.prototype = Object.create(Entity.prototype);

Planet.PATH = `${Entity.PATH}/type/background/space/planet`;
Planet.EMOJI = emojis[2849];

module.exports = Planet;
