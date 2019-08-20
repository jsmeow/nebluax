const SpaceBackgroundLargeStarFactory = require('./large/space-background-large-star-factory');
const SpaceBackgroundLargeWideStarFactory = require('./large-wide/space-background-large-wide-star-factory');
const SpaceBackgroundMediumStarFactory = require('./medium/space-background-medium-star-factory');
const SpaceBackgroundSmallStarFactory = require('./small/space-background-small-star-factory');

function SpaceBackgroundStarFactory(factory, list) {
  this.large = new SpaceBackgroundLargeStarFactory(factory, list);
  this.largeWide = new SpaceBackgroundLargeWideStarFactory(factory, list);
  this.medium = new SpaceBackgroundMediumStarFactory(factory, list);
  this.small = new SpaceBackgroundSmallStarFactory(factory, list);
}

module.exports = SpaceBackgroundStarFactory;
