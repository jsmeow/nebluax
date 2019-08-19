const Space = require('../../../../category/background/outer-space/space/space');

function OuterSpaceBackgroundSpaceFactory(factory, list) {
  this.space = function(args) {
    return new Space({ ...args, factory, list });
  };
}

module.exports = OuterSpaceBackgroundSpaceFactory;
