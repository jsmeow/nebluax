const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const util = require('../../../../util/entity-util');
const emojis = require('emoji.json/emoji-compact.json');

function Planet(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || util.pos.x.rndm(),
      y: args.y || util.pos.y.rndm(),
      speed: args.speed || util.num.rndm.flt(0.25, 0.3),
      dy: args.dy || 1
    })
  );

  /** @override **/
  this.preUpdate = function() {
    util.val.collsn.bndry.bttm(this.y, 0) &&
      Object.assign(this, {
        x: util.pos.x.rndm(),
        y: util.pos.y.rndm([-canvas.height, 0])
      });
  };
}

Planet.prototype = Object.create(Entity.prototype);

Planet.PATH =
  './main/controller/type/entities/entity/type/background/space/planet';
Planet.EMOJI = emojis[2849];

module.exports = Planet;
