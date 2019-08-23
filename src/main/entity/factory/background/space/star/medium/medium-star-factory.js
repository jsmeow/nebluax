const MediumBlinkingPurpleStar1 = require('../../../../../type/background/space/star/medium/purple-blinking-1/medium-blinking-purple-star-1');
const MediumBlinkingRedStar1 = require('../../../../../type/background/space/star/medium/red-blinking-1/medium-blinking-red-star-1');
const MediumBlinkingWhiteStar1 = require('../../../../../type/background/space/star/medium/white-blinking-1/medium-blinking-white-star-1');

function MediumStarFactory(factory, entities) {
  this.mediumBlinkingPurpleStar1 = function(args) {
    const entity = new MediumBlinkingPurpleStar1({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.mediumBlinkingRedStar1 = function(args) {
    const entity = new MediumBlinkingRedStar1({
      ...args,
      meta: {
        creator: args && args.meta ? args.meta.creator : null,
        factory,
        entities
      }
    });
    entities[0].push(entity);
    return entity;
  };

  this.mediumBlinkingWhiteStar1 = function(args) {
    const entity = new MediumBlinkingWhiteStar1({
      ...args,
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

module.exports = MediumStarFactory;
