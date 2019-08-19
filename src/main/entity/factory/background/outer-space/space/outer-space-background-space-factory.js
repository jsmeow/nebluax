const Space = require('../../../../category/background/outer-space/space/space');

function OuterSpaceBackgroundSpaceFactory(factory, list) {
  this.space = function(args) {
    const entity = new Space({
      ...args,
      meta: {
        ...(args && args.meta ? args.meta : {}),
        factory,
        list
      }
    });
    list[0].push(entity);
    return entity;
  };
}

module.exports = OuterSpaceBackgroundSpaceFactory;
