const entityFctry = require('./factory/entity-factory');
const log = require('../../../log/log');

// The application entities controller
function EntitiesController() {
  // The application entities list set
  this.setList = [[], [], []];

  // Mixin reference to the main the application entities list set to the main
  // entity factory
  entityFctry.init(this.setList);

  // Create the current application background and player user entity
  this.bg = entityFctry.factories.bg.space.bg();
  this.player = entityFctry.factories.game.ship.player();

  //
  const asteroid1 = entityFctry.factories.game.asteroid[1]();

  log.ctrlr.entities.init.suc();
}

module.exports = new EntitiesController();
