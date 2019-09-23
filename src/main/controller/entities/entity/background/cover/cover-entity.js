const BackgroundEntity = require('../background-entity');
const update = require('../../../update/update-entity');

function CoverEntity(args) {
  BackgroundEntity.call(this, args);

  // Add the entity position action to the entity update actions list
  this.actions.push(update.bg.position.cover);
}

CoverEntity.prototype = Object.create(BackgroundEntity.prototype);

CoverEntity.PATH = `${BackgroundEntity.PATH}/cover`;

module.exports = CoverEntity;
