const BackgroundFactory = require('./factory/type/background-factory');

// The application entities controller
function EntitiesController() {
  // The application entities list set
  this.setList = [[], [], []];

  // The entity factory instance used by the controller
  this.factory = {
    bg: this.create(BackgroundFactory, 0)
  };
}

// The entity types list
EntitiesController.types = ['BG', 'DISP', 'GAME'];

// Create the factories by entity type
EntitiesController.prototype.create = function(EntityFactory, idx) {
  EntityFactory.prototype.setList = this.setList;
  EntityFactory.prototype.types = EntitiesController.types;
  EntityFactory.prototype.canvas = this.controllers.canvas;
  return new EntityFactory(idx);
};

module.exports = EntitiesController;
