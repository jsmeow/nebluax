// An application game frame
function gameFrame(entities) {
  function update() {
    entities.setList.forEach(list => {
      list.forEach((entity, index) => {
        entity.update(index);
      });
    });
  }

  function render() {
    entities.setList.forEach(list => {
      list.forEach((entity, index) => {
        entity.render(index);
      });
    });
  }

  return [update, render];
}

module.exports = gameFrame;
