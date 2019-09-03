const BackgroundEntity = require('../background-entity');
const update = require('../../../update/update-entity');

function CoverEntity(args) {
  BackgroundEntity.call(this, args);

  this.actions.push(update.bg.position.cover(args.y));
}

CoverEntity.prototype = Object.create(BackgroundEntity.prototype);

CoverEntity.PATH = `${BackgroundEntity.PATH}/cover`;

module.exports = CoverEntity;
