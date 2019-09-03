const { player } = require('../../entities/entities-controller');
const enums = require('../../../enums/enums');

// On keyup event actions
function onKeyupEvent(event) {
  const actions = {
    [enums.controller.keyEvent.keys.A]() {
      if (player.direction.right) {
        player.dx = 1;
      } else {
        player.dx = 0;
      }
      player.direction.left = false;
    },
    [enums.controller.keyEvent.keys.D]() {
      if (player.direction.left) {
        player.dx = -1;
      } else {
        player.dx = 0;
      }
      player.direction.right = false;
    },
    [enums.controller.keyEvent.keys.W]() {
      if (player.direction.down) {
        player.dy = 1;
      } else {
        player.dy = 0;
      }
      player.direction.up = false;
    },
    [enums.controller.keyEvent.keys.S]() {
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
