const drawImage = require('./event/draw-image-event');

function handleOnRender(entity) {
  // Render the entity image onto the html5 canvas
  drawImage(entity);
}

module.exports = handleOnRender;
