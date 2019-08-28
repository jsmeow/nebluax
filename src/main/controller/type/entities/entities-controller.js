const BackgroundEntityFactory = require('./factory/type/background-entity-factory');
const entityFctry = require('./factory/entity-factory');
const log = require('../../log/log');

// The application entities controller
function EntitiesController() {
  // The application entities list set
  this.setList = [[], [], []];

  // Mixin reference to the main the application entities list set to the main
  // entity factory
  Object.getPrototypeOf(entityFctry).setList = this.setList;

  // Mixin main entity factory methods to child entity factories
  [BackgroundEntityFactory].forEach(Factory => {
    Factory.prototype = Object.getPrototypeOf(entityFctry);
    Factory.prototype.constructor = Factory;
  });

  // Create the entity type child factories
  entityFctry.createFactories();

  log.cntrllr.ents.initsuc();
}

module.exports = new EntitiesController();
