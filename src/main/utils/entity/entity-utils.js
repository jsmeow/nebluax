const assertBoundaryCollision = require('./assert/assert-boundary-collision');
const assertEntityCollision = require('./assert/assert-entity-collision');
const generateImageSource = require('./generate/generate-image-source');
const generateUuid = require('./generate/generate-uuid');
const getRandomCanvasPosition = require('./position/get-random-canvas-position');
const getRandomRangedFloat = require('./number/get-random-ranged-float');
const getRandomRangedInt = require('./number/get-random-ranged-int');

module.exports = {
  assert: {
    collision: {
      boundary: assertBoundaryCollision,
      entity: assertEntityCollision
    }
  },
  generate: {
    imageSource: generateImageSource,
    uuid: generateUuid
  },
  position: {
    x: {
      rng: getRandomCanvasPosition.getRandomCanvasPositionX
    },
    y: {
      rng: getRandomCanvasPosition.getRandomCanvasPositionY
    }
  },
  number: {
    rng: {
      float: getRandomRangedFloat,
      int: getRandomRangedInt
    }
  }
};
