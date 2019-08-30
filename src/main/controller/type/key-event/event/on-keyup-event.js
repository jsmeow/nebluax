const { player } = require('../../entities/entities-controller');
const enums = require('../../../enum/enums');

// On keyup event actions
function onKeyupEvent(event) {
  const actions = {
    [enums.KEY_EVENT.KEYA]() {
      if (player.direction.right) {
        player.dx = 1;
      } else {
        player.dx = 0;
      }
      player.direction.left = false;
    },
    [enums.KEY_EVENT.KEYD]() {
      if (player.direction.left) {
        player.dx = -1;
      } else {
        player.dx = 0;
      }
      player.direction.right = false;
    },
    [enums.KEY_EVENT.KEYW]() {
      if (player.direction.down) {
        player.dy = 1;
      } else {
        player.dy = 0;
      }
      player.direction.up = false;
    },
    [enums.KEY_EVENT.KEYS]() {
      if (player.direction.up) {
        player.dy = -1;
      } else {
        player.dy = 0;
      }
      player.direction.down = false;
    }
  };

  // If key corresponds to an action, perform the keydown event action.
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

module.exports = onKeyupEvent;
