const BackgroundEntityFactory = require('./factory/type/background-entity-factory');
const entityFctry = require('./factory/entity-factory');
const log = require('../../../log/log');

// The application entities controller
function EntitiesController() {
  // The application entities list set
  this.setList = [[], [], []];

  // Mixin reference to the main the application entities list set to the main
  // entity factory
  entityFctry.init(this.setList);

  log.ctrlr.entities.init.suc();
}

module.exports = new EntitiesController();
