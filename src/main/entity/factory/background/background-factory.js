const SpaceBackgroundFactory = require('./space/space-background-factory');

function BackgroundFactory(factory, entities) {
  this.space = new SpaceBackgroundFactory(factory, entities);
}

module.exports = BackgroundFactory;
