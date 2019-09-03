const canvas = require('../../../../canvas/canvas-controller');
const BackgroundEntity = require('../background-entity');
const update = require('../../../update/update-entity');
const utils = require('../../../../../utils/utils');

function PropEntity(args) {
  BackgroundEntity.call(
    this,
    Object.assign(args, {
      x: args.x || utils.entity.position.x.rng([0, canvas.width]),
      y: args.y || utils.entity.position.y.rng([0, canvas.height]),
      speed: args.speed || utils.entity.number.rng.float(20, 30),
      dy: args.dy || 1,
      log: false
    })
  );

  this.actions.push(update.bg.position.prop);
}

PropEntity.prototype = Object.create(BackgroundEntity.prototype);

PropEntity.PATH = `${BackgroundEntity.PATH}/prop`;

module.exports = PropEntity;
