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
      player.moveVectorDirection.left = true;
    },
    [keyCodes.KEYD]() {
      player.dx = 1;
      player.moveVectorDirection.right = true;
    },
    [keyCodes.KEYW]() {
      player.dy = -1;
      player.moveVectorDirection.up = true;
    },
    [keyCodes.KEYS]() {
      player.dy = 1;
      player.moveVectorDirection.down = true;
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
      if (player.moveVectorDirection.right) {
        player.dx = 1;
      } else {
        player.dx = 0;
      }
      player.moveVectorDirection.left = false;
    },
    [keyCodes.KEYD]() {
      if (player.moveVectorDirection.left) {
        player.dx = -1;
      } else {
        player.dx = 0;
      }
      player.moveVectorDirection.right = false;
    },
    [keyCodes.KEYW]() {
      if (player.moveVectorDirection.down) {
        player.dy = 1;
      } else {
        player.dy = 0;
      }
      player.moveVectorDirection.up = false;
    },
    [keyCodes.KEYS]() {
      if (player.moveVectorDirection.up) {
        player.dy = -1;
      } else {
        player.dy = 0;
      }
      player.moveVectorDirection.down = false;
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
