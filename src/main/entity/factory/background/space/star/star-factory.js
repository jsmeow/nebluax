const LargeStarFactory = require('./large/large-star-factory');
const LargeWideStarFactory = require('./large-wide/large-wide-star-factory');
const MediumStarFactory = require('./medium/medium-star-factory');
const SmallStarFactory = require('./small/small-star-factory');

function StarFactory(factory, entities) {
  this.large = new LargeStarFactory(factory, entities);
  this.largeWide = new LargeWideStarFactory(factory, entities);
  this.medium = new MediumStarFactory(factory, entities);
  this.small = new SmallStarFactory(factory, entities);
}

module.exports = StarFactory;
