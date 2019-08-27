const { entity: e } = require('../../../../../exception/exception-handler');

// Validate position
function validatePosition(args) {
  args.x && typeof args.x !== 'number' && new e.InvalidXException(args);
  args.y && typeof args.y !== 'number' && new e.InvalidYException(args);
}

// Validate size dimensions
function validateSize(args) {
  args.width &&
    typeof args.width !== 'number' &&
    new e.InvalidWidthException(args);
  args.height &&
    typeof args.height !== 'number' &&
    new e.InvalidHeightException(args);
}

// Validate vector movement properties
function validateVectorProps(args) {
  args.speed &&
    typeof args.speed !== 'number' &&
    new e.InvalidSpeedException(args);
  args.dx &&
    !(Math.abs(args.dx) === 1 || args.dx === 0) &&
    new e.InvalidDxException(args);
  args.dx &&
    !(Math.abs(args.dy) === 1 || args.dy === 0) &&
    new e.InvalidDyException(args);
}

// Validate image properties
function validateImageProps(args) {
  !(typeof args.imgSrc === 'string' || Array.isArray(args.imgSrc)) &&
    new e.InvalidImageSourcePathException(args);
}
// Validate entities set list properties
function validateEntitiesListSetProps(args) {
  !Array.isArray(args.setList) && new e.InvalidEntitiesSetListException(args);
  typeof args.setListIdx !== 'number' &&
    new e.InvalidEntitiesSetListIndexException(args);
}

// Validate the entity arguments
function validateArgs(args) {
  validatePosition(args);
  validateSize(args);
  validateVectorProps(args);
  validateImageProps(args);
  validateEntitiesListSetProps(args);
}

module.exports = validateArgs;
