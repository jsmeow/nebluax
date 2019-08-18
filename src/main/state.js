// The possible application states object
const states = {
  TITLE: 0,
  GAME: 1,
  PAUSED: 2
};

// The initial application state
const current = states.GAME;

module.exports = {
  current,
  states
};
