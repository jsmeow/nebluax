const { player } = require('../../entities/entities-controller');
const enums = require('../../../enum/enums');

// On keydown event actions
function onKeydownEvent(event) {
  const actions = {
    [enums.KEY_EVENT.KEYA]() {
      player.dx = -1;
      player.direction.left = true;
    },
    [enums.KEY_EVENT.KEYD]() {
      player.dx = 1;
      player.direction.right = true;
    },
    [enums.KEY_EVENT.KEYW]() {
      player.dy = -1;
      player.direction.up = true;
    },
    [enums.KEY_EVENT.KEYS]() {
      player.dy = 1;
      player.direction.down = true;
    }
  };

  // If key corresponds to an action, perform the keydown event action.
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

module.exports = onKeydownEvent;
