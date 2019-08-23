const SmallStar = require('../../../../../type/background/space/star/small/small-star');

function SmallStarFactory(factory, entities) {
  this.multicolorBlinking1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.multicolorBlinking1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.purple1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.purple1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.purple2 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.purple2,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.purple3 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.purple3,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.purpleBlinking1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.purpleBlinking1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.red1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.red1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.red2 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.red2,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.red3 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.red3,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.redBlinking1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.redBlinking1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.white1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.white1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.white2 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.white2,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.white3 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.white3,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.white4 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.white4,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.white5 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.white5,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.whiteBlinking1 = function(args) {
    const entity = new SmallStar({
      ...args,
      imgSrc: SmallStar.imgSrc.whiteBlinking1,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };
}

module.exports = SmallStarFactory;
