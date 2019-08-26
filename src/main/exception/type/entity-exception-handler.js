const log = require('../../util/log');
const { crsMrk } = require('../../util/emoji');

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

function InvalidEntitySetListTypeException(args) {
  throw new EntityExceptionHandler({
    desc:
      'the entities set list type type cannot be undefined or should match the valid entity types enum values',
    entity: args.name,
    name: 'InvalidEntitySetListTypeException',
    val: args.setListType
  });
}

function InvalidEntitySetListTypesException(args) {
  throw new EntityExceptionHandler({
    desc: 'the entity set list types reference cannot be undefined',
    entity: args.name,
    name: 'InvalidEntitySetListTypesException',
    val: args.setListTypes
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

function InvalidEntitiesListIndexException(index) {
  throw new EntityExceptionHandler({
    desc: 'the entities list index cannot be undefined',
    name: 'InvalidEntitiesListIndexException',
    val: index
  });
}

module.exports = {
  InvalidXException,
  InvalidYException,
  InvalidSpeedException,
  InvalidDxException,
  InvalidDyException,
  InvalidWidthException,
  InvalidHeightException,
  InvalidEntitySetListTypeException,
  InvalidEntitySetListTypesException,
  InvalidCanvasException,
  InvalidImageSourcePathException,
  InvalidEntitiesSetListException,
  InvalidEntitiesSetListIndexException,
  InvalidEntitiesListIndexException
};
