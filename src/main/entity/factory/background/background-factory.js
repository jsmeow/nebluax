const SpaceBackgroundFactory = require('./space/space-background-factory');

function BackgroundFactory(factory, list) {
  this.space = new SpaceBackgroundFactory(factory, list);
}

module.exports = BackgroundFactory;
