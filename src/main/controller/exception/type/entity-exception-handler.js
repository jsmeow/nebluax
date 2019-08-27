const log = require('../../../log/log');
const { crsMrk } = require('../../../util/emoji/emoji');

function EntityExceptionHandler({ desc, entity, name, val }) {
  desc && log.err(`${crsMrk} ${desc}`);
  entity.name && log.err(`entity : ${entity}`);
  entity && log.err(`entity : ${entity}`);
  this.name = name || 'EntityException';
  this.message = val && `value : ${JSON.stringify(val)}`;
}

function InvalidXException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity x value must be a number and cannot be undefined',
    entity: args.name,
    name: 'InvalidXException',
    val: args.x
  });
}

function InvalidYException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity y value must be a number and cannot be undefined',
    entity: args.name,
    name: 'InvalidYException',
    val: args.y
  });
}

function InvalidWidthException(args) {
  throw new EntityExceptionHandler({
    desc:
      'the entity width value must be a number and cannot be undefined or zero',
    entity: args.name,
    name: 'InvalidWidthException',
    val: args.width
  });
}

function InvalidHeightException(args) {
  throw new EntityExceptionHandler({
    desc:
      'the entity height value must be a number and cannot be undefined or zero',
    entity: args.name,
    name: 'InvalidHeightException',
    val: args.height
  });
}

function InvalidSpeedException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity speed value must be a number',
    entity: args.name,
    name: 'InvalidSpeedException',
    val: args.speed
  });
}

function InvalidDxException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity dx value can only be zero or have a magnitude of 1',
    entity: args.name,
    name: 'InvalidDxException',
    val: args.dx
  });
}

function InvalidDyException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity dy value can only be zero or have a magnitude of 1',
    entity: args.name,
    name: 'InvalidDyException',
    val: args.dy
  });
}

function InvalidCanvasException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity canvas reference cannot be undefined',
    entity: args.name,
    name: 'InvalidCanvasException',
    val: args.canvas
  });
}

function InvalidImageSourcePathException(args) {
  throw new EntityExceptionHandler({
    desc:
      'the entity image source path is neither string nor array or undefined',
    entity: args.name,
    name: 'InvalidImageSourcePathException',
    val: args.speed
  });
}

function InvalidEntitiesSetListException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entities set list cannot be undefined',
    entity: args.name,
    name: 'InvalidEntitiesListSetException',
    val: args.setList
  });
}

function InvalidEntitiesSetListIndexException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entities set list index cannot be undefined',
    entity: args.name,
    name: 'InvalidEntitiesSetListIndexException',
    val: args.setListIdx
  });
}

module.exports = {
  InvalidXException,
  InvalidYException,
  InvalidWidthException,
  InvalidHeightException,
  InvalidSpeedException,
  InvalidDxException,
  InvalidDyException,
  InvalidCanvasException,
  InvalidImageSourcePathException,
  InvalidEntitiesSetListException,
  InvalidEntitiesSetListIndexException
};
