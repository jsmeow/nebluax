const SpaceBackgroundLargeStarFactory = require('./large/space-background-large-star-factory');
const SpaceBackgroundLargeWideStarFactory = require('./large-wide/space-background-large-wide-star-factory');
const SpaceBackgroundMediumStarFactory = require('./medium/space-background-medium-star-factory');
const SpaceBackgroundSmallStarFactory = require('./small/space-background-small-star-factory');

function SpaceBackgroundStarFactory(factory, entities) {
  this.large = new SpaceBackgroundLargeStarFactory(factory, entities);
  this.largeWide = new SpaceBackgroundLargeWideStarFactory(factory, entities);
  this.medium = new SpaceBackgroundMediumStarFactory(factory, entities);
  this.small = new SpaceBackgroundSmallStarFactory(factory, entities);
}

module.exports = SpaceBackgroundStarFactory;
