const eventKeys = require('../static/key-event-keys');

// The player.
let player = null;

function init(_player) {
  player = _player;
}

// Keyboard keys used.
const keys = [
  eventKeys[13],
  eventKeys[32],
  eventKeys[37],
  eventKeys[38],
  eventKeys[39],
  eventKeys[40],
  eventKeys[81]
];

// Flag whether a key has been pressed.
let isKeypressed = null;

// On keydown event.
function onKeydown(event) {
  // Set keypressed status to true.
  isKeypressed = true;
  const events = {};
  /*    [keys.START]() {
      // Start the game if in title screen state and not running.
      if (this.state === Game.states.TITLE) {
        this.setState(Game.states.PLAYING);
      }
    },
    // Move player entity left.
    [keys.LEFT]() {
      player.moveInVector('left');
    },
    // Move player entity right.
    [keys.RIGHT]() {
      player.moveInVector('right');
    },
    // Move player entity up.
    [keys.UP]() {
      player.moveInVector('up');
    },
    // Move player entity down.
    [keys.DOWN]() {
      player.moveInVector('down');
    },
    // Fire a game player entity bomb.
    [keys.ACTION1]() {
      player.addPlayerEntitySmallBombToGameEntities();
    },
    // Use game player entity power.
    [keys.ACTION2]() {
      player.usePlayerPower();
    }*/
  events.key && key();
}

// On keyup event.
function onKeyup(event) {
  // Set keypressed status to true.
  isKeypressed = false;
  const events = {};
  /*    // Clear move player entity move left interval.
    [keys.left]() {
      player.disposePlayerEntityMoveLeftInterval();
    },
    // Clear move player entity move right interval.
    [keys.right]() {
      player.disposePlayerEntityMoveRightInterval();
    },
    // Clear move player entity move up interval.
    [keys.up]() {
      player.disposePlayerEntityMoveUpInterval();
    },
    // Clear move player entity move down interval.
    [keys.down]() {
      player.disposePlayerEntityMoveDownInterval();
    }
  };*/
  events.key && key();
}

// Add keydown event listener.
function addKeydownEventListener() {
  document.body.addEventListener('keydown', onKeydown);
}

// Add keyup event listener.
function addKeyupEventListener() {
  document.body.addEventListener('keyup', onKeyup);
}

// Remove keydown event listener.
function removeKeydownEventListener() {
  document.body.removeEventListener('keydown', onKeydown);
}

// Remove keyup event listener.
function removeKeyupEventListener() {
  document.body.removeEventListener('keyup', onKeyup);
}

module.exports = init;
module.exports.keys = keys;
module.exports.keyisKeypresseds = isKeypressed;
module.exports.onKeydown = onKeydown;
module.exports.onKeyup = onKeyup;
module.exports.addKeydownEventListener = addKeydownEventListener;
module.exports.addKeyupEventListener = addKeyupEventListener;
module.exports.removeKeydownEventListener = removeKeydownEventListener;
module.exports.removeKeyupEventListener = removeKeyupEventListener;
