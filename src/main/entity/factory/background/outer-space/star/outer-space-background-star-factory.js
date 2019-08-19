const OuterSpaceBackgroundLargeStarFactory = require('./large/outer-space-background-large-star-factory');
const OuterSpaceBackgroundLargeWideStarFactory = require('./large-wide/outer-space-background-large-wide-star-factory');
const OuterSpaceBackgroundMediumStarFactory = require('./medium/outer-space-background-medium-star-factory');
const OuterSpaceBackgroundSmallStarFactory = require('./small/outer-space-background-small-star-factory');

function OuterSpaceBackgroundStarFactory() {
  this.large = new OuterSpaceBackgroundLargeStarFactory();
  this.largeWide = new OuterSpaceBackgroundLargeWideStarFactory();
  this.medium = new OuterSpaceBackgroundMediumStarFactory();
  this.small = new OuterSpaceBackgroundSmallStarFactory();
}

module.exports = OuterSpaceBackgroundStarFactory;
