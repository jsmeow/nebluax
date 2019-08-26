const canvas = require('../../../../../../canvas/canvas-controller');
const Entity = require('../../../../entity');
const getRandomCanvasPos = require('../../../../util/get-random-canvas-position');
const getRndRangedFloat = require('../../../../util/get-random-ranged-float');
const hasCollBoundary = require('../../../../util/has-collided-boundary');

function Planet(args) {
  Entity.call(
    this,
    Object.assign(args, {
      x: args.x || getRandomCanvasPos.x(),
      y: args.y || getRandomCanvasPos.y(),
      speed: args.speed || getRndRangedFloat(0.25, 0.3),
      dy: args.dy || 1
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

Planet.prototype = Object.create(Entity.prototype);

Planet.PATH =
  './main/controller/type/entities/entity/type/background/space/planet';

module.exports = Planet;
