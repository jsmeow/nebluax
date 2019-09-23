const log = require('../../../log/log');

module.exports = {
  parent() {
    log.error(`The entity parent entity value is invalid`);
    throw new Error('InvalidParentEntityException');
  },
  faction() {
    log.error(`The bullet entity faction value is invalid`);
    throw new Error('InvalidBulletFactionException');
  },
  position(x, y) {
    if (x && typeof x !== 'number') {
      log.error(`The entity x argument value is not number`);
      log.error(`Value: ${x}`);
      throw new Error('InvalidXException');
    }
    if (y && typeof y !== 'number') {
      log.error(`The entity y argument value is not number`);
      log.error(`Value: ${y}`);
      throw new Error('InvalidYException');
    }
  },
  size(width, height) {
    if (width && typeof width !== 'number') {
      log.error(`The entity width argument value is not number`);
      log.error(`Value: ${width}`);
      throw new Error('InvalidWidthException');
    }
    if (height && typeof height !== 'number') {
      log.error(`The entity height argument value is not number`);
      log.error(`Value: ${height}`);
      throw new Error('InvalidHeightException');
    }
  },
  vector(speed, dx, dy) {
    if (speed && typeof speed !== 'number') {
      log.error(`The entity speed argument value is not number`);
      log.error(`Value: ${speed}`);
      throw new Error('InvalidSpeedException');
    }
    if (dx && !(Math.abs(dx) === 1 || dx === 0)) {
      log.error(`The entity dx argument value must be 0 or magnitude 1`);
      log.error(`Value: ${dx}`);
      throw new Error('InvalidDxException');
    }
    if (dy && !(Math.abs(dy) === 1 || dy === 0)) {
      log.error(`The entity dy argument value must be 0 or magnitude 1`);
      log.error(`Value: ${dy}`);
      throw new Error('InvalidDyException');
    }
  },
  imagePath(imagePath) {
    if (!(typeof imagePath === 'string' || Array.isArray(imagePath))) {
      log.error(`The entity image path must be a string or array`);
      log.error(`Value: ${imagePath}`);
      throw new Error('InvalidImagePathException');
    }
  },
  setList(setList, setListIdx) {
    if (!Array.isArray(setList)) {
      log.error(`The entity entities set list is invalid`);
      log.error(`Value: ${setList}`);
      throw new Error('InvalidEntitiesSetListException');
    }
    if (typeof setListIdx !== 'number') {
      log.error(`The entity entities set list index is not number`);
      log.error(`Value: ${setListIdx}`);
      throw new Error('InvalidEntitiesSetListIndexException');
    }
  }
};
