// Define the possible application states value keys
const keys = {
  title: 'TITLE',
  game: 'GAME',
  paused: 'PAUSED'
};

// Define and set the current application state
const curr = keys.game;

module.exports = {
  curr,
  keys
};
