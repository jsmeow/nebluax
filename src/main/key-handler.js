const keyCodes = require('../static/key-codes/key-event-codes');

// On keydown event.
function onKeydown(player, state, event) {
  // Key actions
  const actions = {
    // Enter key
    [keyCodes.ENTER]() {
      // Start the game if state = title.
      if (state.current === state.states.TITLE) {
        state.current = state.states.GAME;
      }
    },
    // A key
    [keyCodes.KEYA]() {
      player.dx = -player.speed;
      player.ddx.left = true;
    },
    // D key
    [keyCodes.KEYD]() {
      player.dx = player.speed;
      player.ddx.right = true;
    },
    // W key
    [keyCodes.KEYW]() {
      player.dy = -player.speed;
      player.ddy.up = true;
    },
    // S key
    [keyCodes.KEYS]() {
      player.dy = player.speed;
      player.ddy.down = true;
    },
    // Spacebar key
    [keyCodes.SPACE]() {
      player.createBombs();
    },
    // Q key
    [keyCodes.KEYQ]() {
      player.startShieldedTimer();
    }
  };

  // If key corresponds to an action, do key event action.
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

// On keyup event.
function onKeyup(player, state, event) {
  // Key actions
  const actions = {
    // A key
    [keyCodes.KEYA]() {
      if (player.ddx.right) {
        player.dx = player.speed;
      } else {
        player.dx = 0;
      }
      player.ddx.left = false;
    },
    // D key
    [keyCodes.KEYD]() {
      if (player.ddx.left) {
        player.dx = -player.speed;
      } else {
        player.dx = 0;
      }
      player.ddx.right = false;
    },
    // W key
    [keyCodes.KEYW]() {
      if (player.ddy.down) {
        player.dy = player.speed;
      } else {
        player.dy = 0;
      }
      player.ddy.up = false;
    },
    // S key
    [keyCodes.KEYS]() {
      if (player.ddy.up) {
        player.dy = -player.speed;
      } else {
        player.dy = 0;
      }
      player.ddy.down = false;
    }
  };

  // If key corresponds to an action, do key event action.
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

// Add keydown event listener.
function addKeydownEventListener(player, state) {
  document.body.addEventListener(
    'keydown',
    onKeydown.bind(this, player, state)
  );
}

// Add keyup event listener.
function addKeyupEventListener(player, state) {
  document.body.addEventListener('keyup', onKeyup.bind(this, player, state));
}

// Remove keydown event listener.
function removeKeydownEventListener(player, state) {
  document.body.removeEventListener(
    'keydown',
    this.onKeydown.bind(this, player, state)
  );
}

// Remove keyup event listener.
function removeKeyupEventListener(player, state) {
  document.body.removeEventListener(
    'keyup',
    this.onKeyup.bind(this, player, state)
  );
}

module.exports = {
  addKeydownEventListener,
  addKeyupEventListener,
  removeKeydownEventListener,
  removeKeyupEventListener
};
