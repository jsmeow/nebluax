const SmallBlinkingMulticolorStar1 = require('../../../../../category/background/space/star/small/multicolor-blinking-1/small-blinking-multicolor-star-1');
const SmallPurpleStar1 = require('../../../../../category/background/space/star/small/purple-1/small-purple-star-1');
const SmallPurpleStar2 = require('../../../../../category/background/space/star/small/purple-2/small-purple-star-2');
const SmallPurpleStar3 = require('../../../../../category/background/space/star/small/purple-3/small-purple-star-3');
const SmallBlinkingPurpleStar1 = require('../../../../../category/background/space/star/small/purple-blinking-1/small-blinking-purple-star-1');
const SmallRedStar1 = require('../../../../../category/background/space/star/small/red-1/small-red-star-1');
const SmallRedStar2 = require('../../../../../category/background/space/star/small/red-2/small-red-star-2');
const SmallRedStar3 = require('../../../../../category/background/space/star/small/red-3/small-red-star-3');
const SmallBlinkingRedStar1 = require('../../../../../category/background/space/star/small/red-blinking-1/small-blinking-red-star-1');
const SmallWhiteStar1 = require('../../../../../category/background/space/star/small/white-1/small-white-star-1');
const SmallWhiteStar2 = require('../../../../../category/background/space/star/small/white-2/small-white-star-2');
const SmallWhiteStar3 = require('../../../../../category/background/space/star/small/white-3/small-white-star-3');
const SmallWhiteStar4 = require('../../../../../category/background/space/star/small/white-4/small-white-star-4');
const SmallWhiteStar5 = require('../../../../../category/background/space/star/small/white-5/small-white-star-5');
const SmallBlinkingWhiteStar1 = require('../../../../../category/background/space/star/small/white-blinking-1/small-blinking-white-star-1');

function SpaceBackgroundSmallStarFactory(factory, list) {
  this.smallBlinkingMulticolorStar1 = function(args) {
    const entity = new SmallBlinkingMulticolorStar1({
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

  this.smallPurpleStar1 = function(args) {
    const entity = new SmallPurpleStar1({
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

  this.smallPurpleStar2 = function(args) {
    const entity = new SmallPurpleStar2({
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

  this.smallPurpleStar3 = function(args) {
    const entity = new SmallPurpleStar3({
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

  this.smallBlinkingPurpleStar1 = function(args) {
    const entity = new SmallBlinkingPurpleStar1({
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

  this.smallRedStar1 = function(args) {
    const entity = new SmallRedStar1({
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

  this.smallRedStar2 = function(args) {
    const entity = new SmallRedStar2({
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

  this.smallRedStar3 = function(args) {
    const entity = new SmallRedStar3({
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

  this.smallBlinkingRedStar1 = function(args) {
    const entity = new SmallBlinkingRedStar1({
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

  this.smallWhiteStar1 = function(args) {
    const entity = new SmallWhiteStar1({
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

  this.smallWhiteStar2 = function(args) {
    const entity = new SmallWhiteStar2({
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

  this.smallWhiteStar3 = function(args) {
    const entity = new SmallWhiteStar3({
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

  this.smallWhiteStar4 = function(args) {
    const entity = new SmallWhiteStar4({
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

  this.smallWhiteStar5 = function(args) {
    const entity = new SmallWhiteStar5({
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

  this.smallBlinkingWhiteStar1 = function(args) {
    const entity = new SmallBlinkingWhiteStar1({
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

module.exports = SpaceBackgroundSmallStarFactory;
