const Entity = require('../../../../entity');
const hasCollBoundary = require('../../../../util/has-collided-boundary');
const getRandomCanvasPos = require('../../../../util/get-random-canvas-position');

function Star(args) {
  Entity.call(this, {
    ...args,
    x: args.x || getRandomCanvasPos.x(),
    y: args.y || getRandomCanvasPos.y()
  });

  /** @override **/
  this.preUpdate = function() {
    hasCollBoundary.bot(this.y, 0) &&
      Object.assign(this, {
        y: getRandomCanvasPos({ y: [-this.canvas.height, 0] })
      });
  };
}

Star.prototype = Object.create(Entity.prototype);

Star.PATH = './main/entity/type/background/space/star';

module.exports = Star;
