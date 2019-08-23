const renderImage = require('./event/render-image');

function RenderEventHandler(entity) {
  // Render the entity image onto the html5 canvas
  this.renderImage = function() {
    renderImage(entity);
  };
}

module.exports = RenderEventHandler;
