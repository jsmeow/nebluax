const { player } = require('../../entities/entities-controller');
const enums = require('../../../enums/enums');

// On keydown event actions
function onKeydownEvent(event) {
  const actions = {
    [enums.controller.keyEvent.keys.A]() {
      player.dx = -1;
      player.direction.left = true;
    },
    [enums.controller.keyEvent.keys.D]() {
      player.dx = 1;
      player.direction.right = true;
    },
    [enums.controller.keyEvent.keys.W]() {
      player.dy = -1;
      player.direction.up = true;
    },
    [enums.controller.keyEvent.keys.S]() {
      player.dy = 1;
      player.direction.down = true;
    },
    [enums.controller.keyEvent.keys.SPACE]() {
      player.fireBomb();
    },
    [enums.controller.keyEvent.keys.Q]() {
      player.shield();
    },
    [enums.controller.keyEvent.keys.E]() {
      player.fireMine();
    }
  };

  // If key corresponds to an action, perform the keydown event action
  if (Object.keys(actions).includes(event.keyCode.toString())) {
    actions[event.keyCode]();
  }
}

module.exports = onKeydownEvent;
