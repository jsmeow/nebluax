const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const util = require('../../../../util/entity-util');

function Star(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || util.getRndmCanvasX(),
      y: args.y || util.getRndmCanvasY()
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

Star.prototype = Object.create(Entity.prototype);

Star.PATH = './main/controller/type/entities/entity/type/background/space/star';

module.exports = Star;
