const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const util = require('../../../../util/entity-util');
const emojis = require('emoji.json/emoji-compact.json');

function Planet(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || util.getRndmCanvasX(),
      y: args.y || util.getRndmCanvasY(),
      speed: args.speed || util.getRndmRangedFlt(0.25, 0.3),
      dy: args.dy || 1,
      emoji: Planet.EMOJI
    })
  );

  /** @override **/
  this.preUpdate = function() {
    util.hasCollidedBndry.bttm(this.y, 0) &&
      Object.assign(this, {
        x: util.getRndmCanvasX(),
        y: util.getRndmCanvasY([-canvas.height, 0])
      });
  };
}

Planet.prototype = Object.create(Entity.prototype);

Planet.PATH =
  './main/controller/type/entities/entity/type/background/space/planet';
Planet.EMOJI = emojis[2849];

module.exports = Planet;
