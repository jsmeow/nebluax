const log = require('../../../../../../log/log');

// Validate position
function validatePosition(args) {
  if (args.x && typeof args.x !== 'number') {
    log.err(`The entity x argument value is not number`);
    log.err(`Value: ${args.x}`);
    throw new Error('InvalidXException');
  }

  if (args.y && typeof args.y !== 'number') {
    log.err(`The entity y argument value is not number`);
    log.err(`Value: ${args.y}`);
    throw new Error('InvalidYException');
  }
}

// Validate size dimensions
function validateSize(args) {
  if (args.width && typeof args.width !== 'number') {
    log.err(`The entity width argument value is not number`);
    log.err(`Value: ${args.width}`);
    throw new Error('InvalidWidthException');
  }

  if (args.height && typeof args.height !== 'number') {
    log.err(`The entity height argument value is not number`);
    log.err(`Value: ${args.height}`);
    throw new Error('InvalidHeightException');
  }
}

// Validate vector movement properties
function validateVectorProps(args) {
  if (args.speed && typeof args.speed !== 'number') {
    log.err(`The entity speed argument value is not number`);
    log.err(`Value: ${args.speed}`);
    throw new Error('InvalidSpeedException');
  }

  if (args.dx && !(Math.abs(args.dx) === 1 || args.dx === 0)) {
    log.err(`The entity dx argument value must be 0 or magnitude 1`);
    log.err(`Value: ${args.dx}`);
    throw new Error('InvalidDxException');
  }

  if (args.dy && !(Math.abs(args.dy) === 1 || args.dy === 0)) {
    log.err(`The entity dy argument value must be 0 or magnitude 1`);
    log.err(`Value: ${args.dy}`);
    throw new Error('InvalidDyException');
  }
}

// Validate image properties
function validateImageProps(args) {
  if (!(typeof args.imgSrc === 'string' || Array.isArray(args.imgSrc))) {
    log.err(`The entity image source must be a string or array`);
    log.err(`Value: ${args.imgSrc}`);
    throw new Error('InvalidImageSourceException');
  }
}
// Validate entities set list properties
function validateEntitiesListSetProps(args) {
  if (!Array.isArray(args.setList)) {
    log.err(`The entity entities set list is invalid`);
    log.err(`Value: ${args.setList}`);
    throw new Error('InvalidEntitiesSetListException');
  }

  if (typeof args.setListIdx !== 'number') {
    log.err(`The entity entities set list index is not number`);
    log.err(`Value: ${args.setListIdx}`);
    throw new Error('InvalidEntitiesSetListIndexException');
  }
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
