const drawImage = require('./handle/draw-image');

function RenderHandler(entity) {
  // Render the entity image onto the html5 canvas
  drawImage(entity);
}

module.exports = RenderHandler;
