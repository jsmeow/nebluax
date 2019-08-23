const SpaceFactory = require('./space/space-factory');

function BackgroundEntityFactory(factory, entities) {
  this.space = new SpaceFactory(factory, entities);
}

module.exports = BackgroundEntityFactory;
