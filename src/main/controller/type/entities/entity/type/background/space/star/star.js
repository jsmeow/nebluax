const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const getRandomCanvasPos = require('../../../../util/get-random-canvas-position');
const hasCollBoundary = require('../../../../util/has-collided-boundary');

function Star(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || getRandomCanvasPos.x(),
      y: args.y || getRandomCanvasPos.y()
    })
  );

  /** @override **/
  this.preUpdate = function() {
    hasCollBoundary.bot(this.y, 0) &&
      Object.assign(this, {
        x: getRandomCanvasPos.x(),
        y: getRandomCanvasPos.y([-canvas.height, 0])
      });
  };
}

Star.prototype = Object.create(Entity.prototype);

Star.PATH = './main/controller/type/entities/entity/type/background/space/star';

module.exports = Star;
