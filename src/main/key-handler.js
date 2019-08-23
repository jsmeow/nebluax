const { entities } = require('./entities');
const state = require('./state');
const keyCodes = require('../../static/key-codes/key-event-codes');

// The application player/user entity
const player = entities[0];

// On keydown event actions
function onKeydown(event) {
  const actions = {
    [keyCodes.ENTER]() {
      if (state.current === state.states.TITLE) {
        state.current = state.states.GAME;
      }
    },
    [keyCodes.KEYA]() {
      player.dx = -1;
      player.direction.left = true;
    },
    [keyCodes.KEYD]() {
      player.dx = 1;
      player.direction.right = true;
    },
    [keyCodes.KEYW]() {
      player.dy = -1;
      player.direction.up = true;
    },
    [keyCodes.KEYS]() {
      player.dy = 1;
      player.direction.down = true;
    },
    [keyCodes.SPACE]() {
      player.createBombs();
    },
    [keyCodes.KEYQ]() {
      player.createShield();
    },
    [keyCodes.KEYE]() {
      player.createMines();
    }
  };

  // If key corresponds to an action, perform the keydown event action.
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

// On keyup event actions
function onKeyup(event) {
  const actions = {
    [keyCodes.KEYA]() {
      if (player.direction.right) {
        player.dx = 1;
      } else {
        player.dx = 0;
      }
      player.direction.left = false;
    },
    [keyCodes.KEYD]() {
      if (player.direction.left) {
        player.dx = -1;
      } else {
        player.dx = 0;
      }
      player.direction.right = false;
    },
    [keyCodes.KEYW]() {
      if (player.direction.down) {
        player.dy = 1;
      } else {
        player.dy = 0;
      }
      player.direction.up = false;
    },
    [keyCodes.KEYS]() {
      if (player.direction.up) {
        player.dy = -1;
      } else {
        player.dy = 0;
      }
      player.direction.down = false;
    }
  };

  // If key corresponds to an action, perform the keyup event action.
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

// Add keydown event Listener
function addKeydownEventListener() {
  document.body.addEventListener('keydown', onKeydown.bind(this));
}

// Add keyup event Listener
function addKeyupEventListener() {
  document.body.addEventListener('keyup', onKeyup.bind(this));
}

// Remove keydown event Listener
function removeKeydownEventListener() {
  document.body.removeEventListener('keydown', onKeydown.bind(this));
}

// Remove keyup event Listener
function removeKeyupEventListener() {
  document.body.removeEventListener('keyup', onKeyup.bind(this));
}

module.exports = {
  addKeydownEventListener,
  addKeyupEventListener,
  removeKeydownEventListener,
  removeKeyupEventListener
};
