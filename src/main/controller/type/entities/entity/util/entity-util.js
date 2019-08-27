const generateProp = require('./type/generate-property');
const getRndmCanvasPos = require('./type/get-random-canvas-position');
const getRndmRangedFlt = require('./type/get-random-ranged-float');
const getRndmRangedInt = require('./type/get-random-ranged-int');
const hasCollidedBndry = require('./type/has-collided-boundary');
const validateArgs = require('./type/validate-args');

module.exports = {
  generateImg: generateProp.generateImage,
  generateUuid: generateProp.generateUuid,
  getRndmCanvasX: getRndmCanvasPos.getRandomCanvasX,
  getRndmCanvasY: getRndmCanvasPos.getRandomCanvasY,
  getRndmRangedFlt,
  getRndmRangedInt,
  hasCollidedBndry,
  validateArgs
};
