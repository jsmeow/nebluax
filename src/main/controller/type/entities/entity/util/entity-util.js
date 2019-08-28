const generateProp = require('./type/generate-property');
const getRndmCanvasPos = require('./type/get-random-canvas-position');
const getRndmRangedFlt = require('./type/get-random-ranged-float');
const getRndmRangedInt = require('./type/get-random-ranged-int');
const hasCollidedBndry = require('./type/has-collided-boundary');
const hasCollidedEntity = require('./type/has-collided-boundary');
const validateArgs = require('./type/validate-args');

module.exports = {
  gen: {
    img: generateProp.generateImage,
    uuid: generateProp.generateUuid
  },
  pos: {
    x: {
      rndm: getRndmCanvasPos.getRandomCanvasX
    },
    y: {
      rndm: getRndmCanvasPos.getRandomCanvasY
    }
  },
  num: {
    rndm: {
      flt: getRndmRangedFlt,
      int: getRndmRangedInt
    }
  },
  val: {
    args: validateArgs,
    collsn: {
      bndry: hasCollidedBndry,
      ent: hasCollidedEntity
    }
  }
};
