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

EntitiesController.prototype.create = function(NewFactory, idx) {
  NewFactory.prototype.setList = this.setList;
  NewFactory.prototype.types = EntitiesController.types;
  NewFactory.prototype.canvas = this.controllers.canvas;
  return new NewFactory(idx);
};

module.exports = EntitiesController;
