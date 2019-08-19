const OuterSpaceBackgroundSpaceFactory = require('./space/outer-space-background-space-factory');
const OuterSpaceBackgroundStarFactory = require('./star/outer-space-background-star-factory');

function OuterSpaceBackgroundFactory(factory, list) {
  this.space = new OuterSpaceBackgroundSpaceFactory(factory, list);
  this.star = new OuterSpaceBackgroundStarFactory();
}

module.exports = OuterSpaceBackgroundFactory;
