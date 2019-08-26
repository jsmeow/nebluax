const { entity: e } = require('../../../../exception/exception-handler');

// Validate the entity arguments
function validateArgs(args) {
  // Validate position
  args.x && typeof args.x !== 'number' && new e.InvalidXException(args);
  args.y && typeof args.y !== 'number' && new e.InvalidYException(args);

  // Validate size dimensions
  args.width &&
    typeof args.width !== 'number' &&
    new e.InvalidWidthException(args);
  args.height &&
    typeof args.height !== 'number' &&
    new e.InvalidHeightException(args);

  // Validate vector movement properties
  args.speed &&
    typeof args.speed !== 'number' &&
    new e.InvalidSpeedException(args);
  args.dx &&
    !(Math.abs(args.dx) === 1 || args.dx === 0) &&
    new e.InvalidDxException(args);
  args.dx &&
    !(Math.abs(args.dy) === 1 || args.dy === 0) &&
    new e.InvalidDyException(args);

  // Validate image properties
  !(typeof args.imgSrc === 'string' || Array.isArray(args.imgSrc)) &&
    new e.InvalidImageSourcePathException(args);

  // Validate entities set list properties
  !Array.isArray(args.setList) && new e.InvalidEntitiesSetListException(args);
  typeof args.setListIdx !== 'number' &&
    new e.InvalidEntitiesSetListIndexException(args);
}

module.exports = validateArgs;
