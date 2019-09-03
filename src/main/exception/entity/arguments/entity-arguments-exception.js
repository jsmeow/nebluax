const log = require('../../../log/log');

module.exports = {
  position(x, y) {
    if (x && typeof x !== 'number') {
      log.err(`The entity x argument value is not number`);
      log.err(`Value: ${x}`);
      throw new Error('InvalidXException');
    }

    if (y && typeof y !== 'number') {
      log.err(`The entity y argument value is not number`);
      log.err(`Value: ${y}`);
      throw new Error('InvalidYException');
    }
  },
  size(width, height) {
    if (width && typeof width !== 'number') {
      log.err(`The entity width argument value is not number`);
      log.err(`Value: ${width}`);
      throw new Error('InvalidWidthException');
    }

    if (height && typeof height !== 'number') {
      log.err(`The entity height argument value is not number`);
      log.err(`Value: ${height}`);
      throw new Error('InvalidHeightException');
    }
  },
  vector(speed, dx, dy) {
    if (speed && typeof speed !== 'number') {
      log.err(`The entity speed argument value is not number`);
      log.err(`Value: ${speed}`);
      throw new Error('InvalidSpeedException');
    }

    if (dx && !(Math.abs(dx) === 1 || dx === 0)) {
      log.err(`The entity dx argument value must be 0 or magnitude 1`);
      log.err(`Value: ${dx}`);
      throw new Error('InvalidDxException');
    }

    if (dy && !(Math.abs(dy) === 1 || dy === 0)) {
      log.err(`The entity dy argument value must be 0 or magnitude 1`);
      log.err(`Value: ${dy}`);
      throw new Error('InvalidDyException');
    }
  },
  imagePath(imagePath) {
    if (!(typeof imagePath === 'string' || Array.isArray(imagePath))) {
      log.err(`The entity image path must be a string or array`);
      log.err(`Value: ${imagePath}`);
      throw new Error('InvalidImagePathException');
    }
  },
  setList(setList, setListIdx) {
    if (!Array.isArray(setList)) {
      log.err(`The entity entities set list is invalid`);
      log.err(`Value: ${setList}`);
      throw new Error('InvalidEntitiesSetListException');
    }

    if (typeof setListIdx !== 'number') {
      log.err(`The entity entities set list index is not number`);
      log.err(`Value: ${setListIdx}`);
      throw new Error('InvalidEntitiesSetListIndexException');
    }
  }
};
