const BackgroundFactory = require('./factory/type/background-factory');
const enums = require('../../enum/enums');
const log = require('../../../util/log');
const { whteHvyChckMrk } = require('../../../util/emoji');

// The application entities controller
function EntitiesController() {
  // The application entities list set
  this.setList = [[], [], []];

  // The entity factory used by the controller
  // A reference of the this factory instance will be passed down to the
  // factory created entities so they may create child entities
  this.factory = {};

  // The entity factory types
  this.factory.bg = this.create(BackgroundFactory, enums.ENTITIES.TYPE.BG);

  log.succ(`${whteHvyChckMrk} successfully created the entities controller`);
}

// Create the factories by entity type
EntitiesController.prototype.create = function(EntityFactory, setListIdx) {
  return new EntityFactory({
    setList: this.setList,
    setListIdx,
    factory: this.factory
  });
};

module.exports = new EntitiesController();
