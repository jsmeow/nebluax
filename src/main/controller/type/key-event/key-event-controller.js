const onKeydownEvent = require('./event/on-keydown-event');
const onKeyupEvent = require('./event/on-keyup-event');
const log = require('../../../log/log');

// The application key event controller
function KeyEventController() {
  // Add keydown and keyup event listeners
  this.addKeydownEventListener();
  this.addKeyupEventListener();

  log.ctrlr.keyEvent.init.suc();
}

// Add keydown event Listener
KeyEventController.prototype.addKeydownEventListener = function() {
  document.body.addEventListener('keydown', onKeydownEvent.bind(this));
};

// Add keyup event Listener
KeyEventController.prototype.addKeyupEventListener = function() {
  document.body.addEventListener('keyup', onKeyupEvent.bind(this));
};

// Remove keydown event Listener
KeyEventController.prototype.removeKeydownEventListener = function() {
  document.body.removeEventListener('keydown', onKeydownEvent.bind(this));
};

// Remove keyup event Listener
KeyEventController.prototype.removeKeyupEventListener = function() {
  document.body.removeEventListener('keyup', onKeyupEvent.bind(this));
};

module.exports = new KeyEventController();
