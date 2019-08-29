const generateProperty = require('./type/generate-property');
const getRandomCanvasPosition = require('./type/get-random-canvas-position');
const getRandomRangedFloat = require('./type/get-random-ranged-float');
const getRandomRangedInt = require('./type/get-random-ranged-int');
const hasCollidedBoundary = require('./type/has-collided-boundary');
const hasCollidedEntity = require('./type/has-collided-boundary');
const validateArguments = require('./type/validate-arguments');

module.exports = {
  gen: {
    img: generateProperty.generateImage,
    uuid: generateProperty.generateUuid
  },
  pos: {
    x: {
      rand: getRandomCanvasPosition.getRandomCanvasX
    },
    y: {
      rand: getRandomCanvasPosition.getRandomCanvasY
    }
  },
  num: {
    rand: {
      float: getRandomRangedFloat,
      int: getRandomRangedInt
    }
  },
  valid: {
    args: validateArguments,
    collision: {
      boundary: hasCollidedBoundary,
      entity: hasCollidedEntity
    }
  }
};
