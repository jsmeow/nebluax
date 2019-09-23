const entityFactory = require('./factory/entity-factory');
const log = require('../../log/log');

// The application entities controller
function EntitiesController() {
  // The application entities list set
  this.setList = [[], [], []];

  // Mixin reference to the main the application entities list set to the main
  // entity factory
  entityFactory.init(this.setList);

  // Create the current application background and player user entity
  entityFactory.factories.bg.scene.space();
  this.player = entityFactory.factories.game.combat.ship.player();

  entityFactory.factories.game.combat.asteroid();
  //
  /*  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1(); a
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();
  entityFctry.factories.game.asteroid.asteroid1();*/

  log.controller.entities.init.success();
}

module.exports = new EntitiesController();
