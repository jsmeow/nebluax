const OuterSpaceBackgroundLargeStarFactory = require('./large/outer-space-background-large-star-factory');
const OuterSpaceBackgroundLargeWideStarFactory = require('./large-wide/outer-space-background-large-wide-star-factory');
const OuterSpaceBackgroundMediumStarFactory = require('./medium/outer-space-background-medium-star-factory');
const OuterSpaceBackgroundSmallStarFactory = require('./small/outer-space-background-small-star-factory');

function OuterSpaceBackgroundStarFactory(factory, list) {
  this.large = new OuterSpaceBackgroundLargeStarFactory(factory, list);
  this.largeWide = new OuterSpaceBackgroundLargeWideStarFactory(factory, list);
  this.medium = new OuterSpaceBackgroundMediumStarFactory(factory, list);
  this.small = new OuterSpaceBackgroundSmallStarFactory(factory, list);
}

module.exports = OuterSpaceBackgroundStarFactory;
