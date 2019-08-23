const { list } = require('./entities');

function logBackgroundEntities() {
  console.log(`%cbackground entities:`, 'color: #ea323c;');
  console.log(list[0]);
}

function logDisplayEntities() {
  console.log(`%cdisplay entities:`, 'color: #33954b;');
  console.log(list[1]);
}

function logGameEntities() {
  console.log(`%cgame entities:`, 'color: #0098dc;');
  console.log(list[2]);
}

module.exports = {
  ent: {
    bg: logBackgroundEntities,
    disp: logDisplayEntities,
    game: logGameEntities
  }
};
