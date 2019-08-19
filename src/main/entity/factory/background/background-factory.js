const OuterSpaceBackgroundFactory = require('./outer-space/outer-space-background-factory');

function BackgroundFactory(factory, list) {
  this.outerSpace = new OuterSpaceBackgroundFactory(factory, list);
}

module.exports = BackgroundFactory;
