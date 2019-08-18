const SpaceBackgroundFactory = require('./space/space-background-factory');

function BackgroundFactory(factory) {
  this.space = new SpaceBackgroundFactory(factory);
}

module.exports = BackgroundFactory;
